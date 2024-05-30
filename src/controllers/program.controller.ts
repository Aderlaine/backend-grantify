import { Request, Response, NextFunction } from 'express';
import CustomError from '../handler/CustomError';
import { Program, ProgramSchema } from '../types/schemas';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProgram = async (req: Request, res: Response) =>{
    const programs:Program[] = await prisma.program.findMany();
    res.status(200).json({status: 'success', data: programs})
}