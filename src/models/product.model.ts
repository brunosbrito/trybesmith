import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & IProduct[]>(`
    SELECT * FROM Trybesmith.products
  `);

  return products;
};

const registerProduct = async (product: IProduct) => {
  const { name, amount } = product;
  const newProduct = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
  `, [name, amount]); 

  return newProduct;
};

const productModel = { registerProduct, getAll };

export default productModel;