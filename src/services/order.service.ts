import ordersModel from '../models/order.model';

const getOrders = async () => {
  const order = await ordersModel.getOrders();

  return order;
};

const orderSerivce = { getOrders };

export default orderSerivce;