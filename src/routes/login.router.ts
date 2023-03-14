import { Router } from 'express';
import loginController from '../controller.js/login.controller';
import validateLogin from '../middlewares/login.middleware';

const route = Router();

route.post('/', validateLogin, loginController.login);

export default route;