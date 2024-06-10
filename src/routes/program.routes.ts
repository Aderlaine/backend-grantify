import express, { Router } from "express";
import { getAllProgram, getProgramById } from "../controllers";
import catchAsync from "../utils/catchAsync";
import isLoggedIn from "../middleware/isLoggedIn";

const programRoutes: Router = express.Router();

programRoutes.route("/programs").get(isLoggedIn, catchAsync(getAllProgram));

programRoutes
	.route("/programs/:programId")
	.get(isLoggedIn, catchAsync(getProgramById));

export default programRoutes;
