import { Router } from 'express';
import userController from '../controller.js/user.controller';

const route = Router();

route.post('/', userController.registerUser);

export default route;