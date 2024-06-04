import express, { Router } from 'express';
import programRoutes from './program.routes';
import userRoutes from './user.routes';

const router: Router = express.Router();

router.use('', programRoutes);
router.use('', userRoutes);

export default router;