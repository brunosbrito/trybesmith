// import { RowDataPacket } from 'mysql2';
import { ResultSetHeader } from 'mysql2';
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

const registerOrder = async (userId: number, productsIds: number[]) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?)
  `, [userId]);

  const order = await Promise.all(productsIds.map(async (id) => {
    await connection.execute<ResultSetHeader>(
      `UPDATE Trybesmith.products 
          SET order_id = ?
          WHERE id = ?;`,
      [insertId, id],
    );
  }));
  return order;
};

const ordersModel = { getOrders, registerOrder };

export default ordersModel;