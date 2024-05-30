import express, { Router } from 'express';
import { getAllProgram } from "../controllers";
import catchAsync from '../utils/catchAsync';

const programRoutes :Router = express.Router();

programRoutes.route('/programs')
    .get(catchAsync(getAllProgram));

export default programRoutes;