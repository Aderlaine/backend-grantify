import jwt from "jsonwebtoken";
import { Request } from "express";

const getUserIdFromToken = (req: Request): string => {
	// Ambil token dari header Authorization
	const authorizationHeader = req.headers.authorization;
	if (!authorizationHeader || typeof authorizationHeader !== "string") {
		throw new Error("No token provided");
	}

	// Ambil token dari header Authorization
	const token = authorizationHeader.split(" ")[1];
	if (!token) {
		throw new Error("No token provided");
	}

	try {
		// Verifikasi token JWT dan ambil payloadnya
		const payload = jwt.verify(token, process.env.SECRET_KEY as string) as {
			id: string;
		};
		return payload.id; // ID pengguna disimpan dalam payload
	} catch (error) {
		throw new Error("Invalid token");
	}
};

export { getUserIdFromToken };
