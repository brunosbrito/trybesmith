import { Router } from 'express';
import userController from '../controller.js/user.controller';
import validateUser from '../middlewares/user.middleware';

const route = Router();

route.post('/', validateUser, userController.registerUser);

export default route;