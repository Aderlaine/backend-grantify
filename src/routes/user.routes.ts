import express, { Router } from "express";
import { getAllUser, register } from "../controllers";
import catchAsync from "../utils/catchAsync";
import isLoggedIn from "../middleware/isLoggedIn";

const userRoutes: Router = express.Router();

userRoutes.route("/users").get(isLoggedIn, catchAsync(getAllUser));

userRoutes.route("/register").post(isLoggedIn, catchAsync(register));

export default userRoutes;
