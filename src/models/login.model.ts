import { IUser } from '../interfaces';
import connection from './connection';

const login = async (userLogin: string): Promise<IUser | null> => {
  const [userName] = await connection.execute(`
  SELECT * FROM Trybesmith.users WHERE username=?`, [userLogin]);
  const [user] = userName as IUser[];
  return user || null;
};

const loginModel = { login };

export default loginModel;