import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userService from '../services/user.service';
import generateToken from '../utils/generateToken';

const registerUser = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  
  const newUser = await userService.registerUser(user);

  const token = generateToken(newUser);
  console.log(token);
  return res.status(201).json({ token });
};

const userController = { registerUser };

export default userController;