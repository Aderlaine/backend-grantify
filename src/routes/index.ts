import express, { Router } from 'express';
import programRoutes from './program.routes';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const router: Router = express.Router();

router.use('', programRoutes);
router.use('', userRoutes);
router.use('', authRoutes);

export default router;