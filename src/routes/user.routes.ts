import express, { Router } from 'express';
import { getAllUser  } from "../controllers";
import catchAsync from '../utils/catchAsync';

const userRoutes :Router = express.Router();

userRoutes.route('/users')
    .get(catchAsync(getAllUser));


export default userRoutes;