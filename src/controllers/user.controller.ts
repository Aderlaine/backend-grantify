import { Request, Response, NextFunction } from "express";
import CustomError from "../handler/CustomError";
import { PrismaClient } from "@prisma/client";
import { google } from "googleapis";
import fs from "fs";
import multer from "multer";
import path from "path";
import bcrypt from "bcrypt";
import { EditUserSchema, User, UserSchema } from "../types/userSchema";
import { validateForm } from "../utils/validateForm";
import { getUserIdFromToken } from "../utils/getUserIdByToken";

const prisma = new PrismaClient();

interface AuthRequest extends Request {
	user?: any;
}

const auth = new google.auth.GoogleAuth({
	keyFile: "credentials.json",
	scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

const upload = multer({ dest: "uploads/" });

export const getProfile = async (req: AuthRequest, res: Response) => {
	const userId = req.user?.id;
	if (!userId) {
		return res.status(400).json({ message: "User ID is missing" });
	}

	const user = await prisma.user.findUnique({
		where: { id: userId },
	});

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	return res.status(200).json(user);
};

export const getAllUser = async (req: Request, res: Response) => {
	const users: User[] = await prisma.user.findMany();
	res.status(200).json(users);
};

export const register = async (req: Request, res: Response): Promise<void> => {
	const validatedUser = validateForm(req.body, UserSchema);
	const {
		email,
		password,
		username,
	}: { email: string; password: string; username: string } = validatedUser;

	const existingUser: User | null = await prisma.user.findUnique({
		where: {
			email: email as string,
		},
	});

	if (existingUser) {
		throw new CustomError("User already registered", 400);
	}

	const newPassword = await bcrypt.hash(password, 10);

	const user = await prisma.user.create({
		data: {
			email: email as string,
			username: username as string,
			password: newPassword,
		},
	});

	res.status(201).json(user);
};

export const editUser = async (req: Request, res: Response) => {
	const userId = getUserIdFromToken(req);
	const validatedUser = validateForm(req.body, EditUserSchema);
	const {
		username,
		company,
		experience,
	}: {
		username?: string | null | undefined;
		company?: string | null | undefined;
		experience?: string | null | undefined;
	} = validatedUser;

	const existingUser = await prisma.user.findUnique({
		where: {
			id: userId as string,
		},
	});

	if (!existingUser) {
		return res.status(404).json({ message: "User not found" });
	}

	if (existingUser.id !== userId) {
		return res.status(403).json({ message: "Unauthorized" });
	}

	const updatedUser = await prisma.user.update({
		where: {
			id: userId as string,
		},
		data: {
			username: username || existingUser.username,
			company: company || existingUser.company,
			experience: experience || existingUser.experience,
		},
	});

	res.status(200).json(updatedUser);
};

export const uploadFile = async (req: Request, res: Response) => {
	const userId = getUserIdFromToken(req);
	const filePath = req.file?.path;

	if (!filePath) {
		return res.status(400).json({ message: "No file was uploaded." });
	}

	try {
		const user = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Hapus foto lama jika ada
		if (user.image) {
			const fileIdMatch = user.image.match(/\/d\/(.*?)\//);
			if (fileIdMatch) {
				const fileId = fileIdMatch[1];
				await drive.files.delete({
					fileId: fileId,
				});
			}
		}

		const fileMetadata = {
			name: `${userId}_${req.file?.originalname}`,
		};

		const media = {
			mimeType: req.file?.mimetype,
			body: fs.createReadStream(filePath),
		};

		const fileResponse = await drive.files.create({
			requestBody: fileMetadata,
			media: media,
			fields: "id",
		});

		const fileId = fileResponse.data.id;
		const fileUrl = `https://drive.google.com/uc?id=${fileId}`;

		if (!fileId) {
			throw new Error("File ID is missing from the response");
		}

		await drive.permissions.create({
			fileId: fileId,
			requestBody: {
				role: "reader",
				type: "anyone",
			},
		});

		await prisma.user.update({
			where: { id: userId },
			data: { image: fileUrl },
		});

		fs.unlinkSync(filePath);

		res.status(200).json({
			message: "File uploaded and shared successfully!",
			link: fileUrl,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send(error);
	}
};

// Tambahkan middleware multer untuk menangani unggahan file
export const uploadMiddleware = upload.single("file");
