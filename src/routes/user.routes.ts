import express, { Router } from "express";
import {
	editUser,
	getAllUser,
	getProfile,
	register,
	uploadFile,
	uploadMiddleware,
} from "../controllers";
import catchAsync from "../utils/catchAsync";
import isLoggedIn from "../middleware/isLoggedIn";

const userRoutes: Router = express.Router();

userRoutes.route("/users").get(catchAsync(getAllUser));

userRoutes.route("/profile").get(isLoggedIn, getProfile);

userRoutes.route("/register").post(catchAsync(register));

userRoutes.route("/user/edit").put(catchAsync(editUser));

userRoutes
	.route("/upload")
	.post(isLoggedIn, uploadMiddleware, catchAsync(uploadFile));

export default userRoutes;
