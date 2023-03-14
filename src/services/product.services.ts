import productModel from '../models/product.model';
import { IProduct } from '../interfaces';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();

  return products;
};

const registerProduct = async (product: IProduct) => {
  const products = await productModel.registerProduct(product);

  return products;
};

const productService = { registerProduct, getAll };

export default productService;