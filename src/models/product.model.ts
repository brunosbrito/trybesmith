import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & IProduct[]>(`
    SELECT * FROM Trybesmith.products
  `);

  return products;
};

async function registerProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;
  
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
  `, [name, amount]);

  const { insertId: id } = result;

  const newProduct: IProduct = { id, name, amount };

  return newProduct;
}

const productModel = { registerProduct, getAll };

export default productModel;