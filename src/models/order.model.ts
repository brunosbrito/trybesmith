// import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getOrders = async () => {
  const [orders] = await connection.execute(`
      SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products as p
      ON o.id = p.order_id
      GROUP BY o.id;
  `);

  return orders;
};

const ordersModel = { getOrders };

export default ordersModel;