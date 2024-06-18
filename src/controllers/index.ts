import { getAllProgram, getProgramById } from "./program.controller";
import { getAllUser, register, getProfile, editUser } from "./user.controller";
import { login, logout, refreshToken } from "./auth.controller";
import {
	createBookmark,
	getBookmarks,
	deleteBookmark,
} from "./bookmark.controller";
export {
	getAllProgram,
	getProgramById,
	getAllUser,
	register,
	login,
	logout,
	createBookmark,
	getBookmarks,
	deleteBookmark,
	getProfile,
	editUser,
	refreshToken,
};
