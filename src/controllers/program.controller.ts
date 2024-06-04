import { Request, Response, NextFunction } from "express";
import CustomError from "../handler/CustomError";
import { Program, ProgramSchema } from "../types/schemas";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProgram = async (req: Request, res: Response) => {
	const { category, q } = req.query;
	
	// Construct the search criteria
	const searchCriteria: any = {};
	
	if (q) {
		searchCriteria.OR = [
			{
				title: {
					contains: q.toString(),
					mode: 'insensitive'
				}
			},
			{
				description: {
					contains: q.toString(),
					mode: 'insensitive'
				}
			}
		];
	}

	if (category) {
		searchCriteria.category = {
			contains: category.toString(),
			mode: 'insensitive'
		};
	}

	const programs: Program[] = await prisma.program.findMany({
		where: searchCriteria
	});
	res.status(200).json(programs);
};

export const getProgramById = async (req: Request, res: Response) => {
	const { programId } = req.params;
	const program: Program = await prisma.program.findUniqueOrThrow({
		where: {
			id: programId,
		},
	});
	if (!program) throw new CustomError("Program Not Found", 404);
	res.status(200).json(program);
};
