import express, { Router } from "express";
import programRoutes from "./program.routes";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import bookmark from "./bookmark.routes";

const router: Router = express.Router();

router.use("", programRoutes);
router.use("", userRoutes);
router.use("", authRoutes);
router.use("", bookmark);

export default router;
