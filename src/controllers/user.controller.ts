import { Request, Response, NextFunction } from "express";
import CustomError from "../handler/CustomError";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { User, UserSchema } from "../types/userSchema";
import { validateForm } from "../utils/validateForm";

const prisma = new PrismaClient();

interface AuthRequest extends Request {
	user?: any; // Sesuaikan dengan tipe data user Anda
}
export const getProfile = async (req: AuthRequest, res: Response) => {
	try {
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

		return res.status(200).json({ user });
	} catch (error) {
		console.error("Error in getProfile:", error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

export const getAllUser = async (req: Request, res: Response) => {
	const users: User[] = await prisma.user.findMany();
	res.status(200).json(users);
};

export const register = async (req: Request, res: Response) => {
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
