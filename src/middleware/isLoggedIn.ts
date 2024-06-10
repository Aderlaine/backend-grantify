import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import AuthenticationError from "../handler/AuthenticationError";

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader || typeof authorizationHeader !== "string") {
		throw new AuthenticationError("No token provided, please log in");
	}

	const token = authorizationHeader.split(" ")[1]; // Mengambil token setelah "Bearer"

	if (!token) {
		throw new AuthenticationError("No token provided, please log in");
	}

	try {
		jwt.verify(token, process.env.SECRET_KEY as string);
		next();
	} catch (error) {
		throw new AuthenticationError("Token expired, please log in again");
	}
};

export default isLoggedIn;
