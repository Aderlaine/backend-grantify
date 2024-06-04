import express, { Router } from 'express';
import { getAllProgram, getProgramById,  } from "../controllers";
import catchAsync from '../utils/catchAsync';

const programRoutes :Router = express.Router();

programRoutes.route('/programs')
    .get(catchAsync(getAllProgram));

programRoutes.route('/programs/:programId')
    .get(catchAsync(getProgramById));

export default programRoutes;