import { Request, Response } from "express";
import { getUserIdFromToken } from "../utils/getUserIdByToken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBookmark = async (req: Request, res: Response) => {
	try {
		const userId = getUserIdFromToken(req);
		const programId = req.body.programId;

		// Cek apakah program dengan programId yang diberikan ada
		const program = await prisma.program.findUnique({
			where: { id: programId },
		});

		if (!program) {
			return res.status(404).json({ message: "Program not found" });
		}

		const existingBookmark = await prisma.bookmark.findFirst({
			where: { userId, programId },
		});

		if (existingBookmark) {
			return res.status(400).json({ message: "Program already bookmarked" });
		}
		const bookmark = await prisma.bookmark.create({
			data: {
				userId,
				programId,
			},
		});

		res.json(bookmark);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getBookmarks = async (req: Request, res: Response) => {
	try {
		// Dapatkan ID pengguna dari token JWT
		const userId = getUserIdFromToken(req);

		// Gunakan ID pengguna untuk mendapatkan daftar bookmark
		const bookmarks = await prisma.bookmark.findMany({
			where: { userId },
			include: { program: true },
		});

		res.json(bookmarks);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const deleteBookmark = async (req: Request, res: Response) => {
	try {
		const userId = getUserIdFromToken(req);
		const bookmarkId = req.params.id;

		// Cek apakah bookmark ada
		const bookmark = await prisma.bookmark.findUnique({
			where: { id: bookmarkId },
		});

		if (!bookmark) {
			return res.status(404).json({ message: "Bookmark not found" });
		}

		// Pastikan bookmark milik pengguna yang sesuai
		if (bookmark.userId !== userId) {
			return res.status(403).json({ message: "Unauthorized" });
		}

		// Hapus bookmark
		await prisma.bookmark.delete({
			where: { id: bookmarkId },
		});

		res.json({ message: "Bookmark deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export { createBookmark, getBookmarks, deleteBookmark };
