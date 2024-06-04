import express, { Router } from 'express';
import { getAllUser, register  } from "../controllers";
import catchAsync from '../utils/catchAsync';

const userRoutes :Router = express.Router();

userRoutes.route('/users')
    .get(catchAsync(getAllUser));

userRoutes.route('/register')
    .post(catchAsync(register));


export default userRoutes;