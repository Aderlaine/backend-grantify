import express, { Router } from "express";
import { login, logout } from "../controllers";
import catchAsync from "../utils/catchAsync";

const authRoutes: Router = express.Router();

authRoutes.route("/login").post(catchAsync(login));

authRoutes.route("/logout").post(logout);

export default authRoutes;
