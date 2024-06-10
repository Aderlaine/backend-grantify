import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import AuthenticationError from "../handler/AuthenticationError";

const prisma = new PrismaClient();

const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const user = await prisma.user.findUnique({
		where: {
			email: email as string,
		},
	});

	if (!user) {
		throw new AuthenticationError("Wrong Email or Password");
	}

	const isPassword = await bcrypt.compare(password, user.password);

	if (!isPassword) {
		throw new AuthenticationError("Wrong Email or Password");
	}

	const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, {
		expiresIn: "6h",
	});

	res.status(200).cookie("token", token).json({
		message: "User Successfully Logged In",
		token,
	});
};

const logout = async (req: Request, res: Response): Promise<Response> => {
	res.clearCookie("token");
	return res.status(200).json({
		message: "success",
	});
};

export { login, logout };
