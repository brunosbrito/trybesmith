import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const registerUser = async (user: IUser) => {
  const { username, vocation, level, password } = user;

  const [result] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.users (username, vocation, level, password)
        VALUE (?, ? ,? ,?)
    `, [username, vocation, level, password]);

  const { insertId: id } = result;

  const newUser: IUser = { id, username, vocation, level };

  return newUser;
};

const userModel = { registerUser };

export default userModel;