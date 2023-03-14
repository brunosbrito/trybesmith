import { Router } from 'express';
import productController from '../controller.js/product.controller';
import validateProduct from '../middlewares/product.middlware';

const route = Router();

route.get('/', productController.getAll);
route.post('/', validateProduct, productController.registerProduct);

export default route;