import { Request, Response, NextFunction } from "express";
import CustomError from "../handler/CustomError";
import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import { User } from "../types/userSchema";

const prisma = new PrismaClient();

export const getAllUser = async (req: Request, res: Response) => {
	const users : User[]  = await prisma.user.findMany();
	res.status(200).json(users);
};

export const register = async (req: Request, res: Response) => {
  const { email, password }: { email: string, password: string } = req.body;

  const existingUser : User | null   = await prisma.user.findUnique({
    where: {
      email : email as string,
    },
  });

  if (existingUser) {
    throw new CustomError('User already registered', 400);
  }

  const newPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: email as string,
      password: newPassword,
    },
  });

  res.status(201).json(user);
};