import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { Auth } from '../interfaces';
import orderSerivce from '../services/order.service';

const SECRET = process.env.JWT_SECRET as string;

const getOrders = async (_req: Request, res: Response) => {
  const order = await orderSerivce.getOrders();

  return res.status(200).json(order);
};

const registerOrder = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const decoded = jwt.verify(authorization as string, SECRET) as Auth;
  const { productsIds } = req.body;
  
  const newOrder = await orderSerivce.registerOrder(decoded.id, productsIds);
  console.log(newOrder);
  return res.status(201).json({ userId: decoded.id, productsIds });
};

const orderController = { getOrders, registerOrder };

export default orderController;