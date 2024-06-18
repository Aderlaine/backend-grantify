import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import AuthenticationError from "../handler/AuthenticationError";

const prisma = new PrismaClient();

const generateAccessToken = (userId: string) => {
	return jwt.sign({ id: userId }, process.env.SECRET_KEY as string, {
		expiresIn: "1h",
	});
};

const generateRefreshToken = (userId: string) => {
	return jwt.sign({ id: userId }, process.env.SECRET_KEY as string, {
		expiresIn: "7d",
	});
};

const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const user = await prisma.user.findUnique({
		where: { email: email as string },
	});

	if (!user) {
		throw new AuthenticationError("Wrong Email or Password");
	}

	const isPassword = await bcrypt.compare(password, user.password);
	if (!isPassword) {
		throw new AuthenticationError("Wrong Email or Password");
	}

	const accessToken = generateAccessToken(user.id);
	const refreshToken = generateRefreshToken(user.id);

	res
		.status(200)
		.cookie("accessToken", accessToken, { httpOnly: true })
		.cookie("refreshToken", refreshToken, { httpOnly: true })
		.json({
			message: "User Successfully Logged In",
			accessToken,
			refreshToken,
		});
};

const refreshToken = (req: Request, res: Response) => {
	const { refreshToken } = req.body;

	if (!refreshToken) {
		return res.sendStatus(401);
	}

	jwt.verify(
		refreshToken,
		process.env.SECRET_KEY as string,
		(err: any, user: any) => {
			if (err) return res.sendStatus(403);

			const accessToken = generateAccessToken((user as any).id);

			res.json({ accessToken });
		}
	);
};

const logout = async (req: Request, res: Response): Promise<Response> => {
	res.clearCookie("token");
	return res.status(200).json({
		message: "success",
	});
};

export { login, logout, refreshToken };
