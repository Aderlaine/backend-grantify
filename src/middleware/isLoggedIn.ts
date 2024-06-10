import { Request, Response, NextFunction } from "express";
import AuthenticationError from "../handler/AuthenticationError";
import { getUserIdFromToken } from "../utils/getUserIdByToken";

interface AuthRequest extends Request {
	user?: any; // Sesuaikan dengan tipe data user Anda
}
const isLoggedIn = (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = getUserIdFromToken(req);
		req.user = { id: userId };
		next();
	} catch (error) {
		throw new AuthenticationError(
			"Token expired or invalid, please log in again"
		);
	}
};

export default isLoggedIn;
