import { Request, Response, NextFunction } from "express";
import CustomError from "../handler/CustomError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUser = async (req: Request, res: Response) => {
	const users  = await prisma.user.findMany();
	res.status(200).json(users);
};