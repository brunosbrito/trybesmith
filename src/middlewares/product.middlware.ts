import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../interfaces';

const validateName = (name: string) => {
  if (!name) {
    const message = '"name" is required';
    return ({ status: 400, message });
  }

  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return ({ status: 422, message });
  }

  if (name.length <= 2) {
    const message = '"name" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
};

const validateAmount = (amount: string) => {
  if (!amount) {
    const message = '"amount" is required';
    return ({ status: 400, message });
  }

  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return ({ status: 422, message });
  }

  if (amount.length <= 2) {
    const message = '"amount" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
};

export default function validateProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, amount } = req.body as IProduct;

  const nameError = validateName(name);
  const amountError = validateAmount(amount);

  if (nameError) return res.status(nameError.status).json({ message: nameError.message });
  if (amountError) return res.status(amountError.status).json({ message: amountError.message });

  next();
}