import ordersModel from '../models/order.model';

const getOrders = async () => {
  const order = await ordersModel.getOrders();

  return order;
};

const registerOrder = async (userId: number, productsIds: number[]) => {
  const newOrder = await ordersModel.registerOrder(userId, productsIds);
  if (!newOrder) return false;
  return { userId, productsIds };
};

const orderSerivce = { getOrders, registerOrder };

export default orderSerivce; 