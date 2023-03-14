import { Response, Request } from 'express';
import orderSerivce from '../services/order.service';

const getOrders = async (_req: Request, res: Response) => {
  const order = await orderSerivce.getOrders();

  return res.status(200).json(order);
};

const orderController = { getOrders };

export default orderController;