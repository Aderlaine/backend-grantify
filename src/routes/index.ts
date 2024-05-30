import express, { Router } from 'express';
import programRoutes from './program.routes';

const router: Router = express.Router();

router.use('', programRoutes);

export default router;