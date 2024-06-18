import express, { Router } from "express";
import { login, logout, refreshToken } from "../controllers";
import catchAsync from "../utils/catchAsync";

const authRoutes: Router = express.Router();

authRoutes.route("/login").post(catchAsync(login));

authRoutes.route("/logout").post(logout);

authRoutes.route("/refresh-token").post(refreshToken);

export default authRoutes;
