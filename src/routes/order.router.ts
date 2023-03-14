import { Router } from 'express';
import orderController from '../controller.js/order.controller';

const route = Router();

route.get('/', orderController.getOrders);

export default route;