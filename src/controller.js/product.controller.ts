import { Request, Response } from 'express';
import productService from '../services/product.services';
import { IProduct } from '../interfaces';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();

  console.log(products);

  return res.status(200).json(products);
};

const registerProduct = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const products = await productService.registerProduct(product);

  return res.status(201).json(products);
};

const productController = { registerProduct, getAll };

export default productController;