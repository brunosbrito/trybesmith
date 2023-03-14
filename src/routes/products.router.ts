import { Router } from 'express';
import productController from '../controller.js/product.controller';

const route = Router();

route.get('/', productController.getAll);
route.post('/', productController.registerProduct);

export default route;