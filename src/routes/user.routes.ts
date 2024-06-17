import express, { Router } from "express";
import { editUser, getAllUser, getProfile, register } from "../controllers";
import catchAsync from "../utils/catchAsync";
import isLoggedIn from "../middleware/isLoggedIn";

const userRoutes: Router = express.Router();

userRoutes.route("/users").get(catchAsync(getAllUser));

userRoutes.route("/profile").get(isLoggedIn, getProfile);

userRoutes.route("/register").post(catchAsync(register));

userRoutes.route("/user/edit").put(catchAsync(editUser));

export default userRoutes;
