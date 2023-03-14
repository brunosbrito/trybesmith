import { Request, Response } from 'express';
import { IUser, IUserLogin } from '../interfaces';
import loginService from '../services/login.service';
import generateToken from '../utils/generateToken';

const login = async (req: Request, res: Response) => {
  const { username: userName, password } = req.body as IUserLogin;
  const user = await loginService.login(userName);

  const id = user?.id;
  const username = user?.username;

  if (user?.password !== password || username !== userName) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  const userLogin: IUser = { id, username };

  const token = generateToken(userLogin);
  console.log(token);
  return res.status(200).json({ token });
};

const loginController = { login };

export default loginController;