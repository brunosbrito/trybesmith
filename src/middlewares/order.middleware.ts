import { NextFunction, Request, Response } from 'express';
import { IOrder } from '../interfaces';

const validateProductsIds = (productsIds: number[]) => {
  if (!productsIds) {
    const message = '"productsIds" is required';
    return ({ status: 400, message });
  }

  if (typeof productsIds !== 'object') {
    const message = '"productsIds" must be an array';
    return ({ status: 422, message });
  }

  if (productsIds.length === 0) {
    const message = '"productsIds" must include only numbers';
    return ({ status: 422, message });
  }

  return null;
};

export default function validateOrders(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { productsIds } = req.body as IOrder;

  const productIdsError = validateProductsIds(productsIds);

  if (productIdsError) { 
    return res.status(productIdsError.status).json({ message: productIdsError.message }); 
  }

  next();
}