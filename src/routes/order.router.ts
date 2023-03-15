import { Router } from 'express';
import orderController from '../controller.js/order.controller';
import auth from '../middlewares/auth.middleware';
import validateOrders from '../middlewares/order.middleware';

const route = Router();

route.get('/', orderController.getOrders);
route.post('/', auth, validateOrders, orderController.registerOrder);

export default route;