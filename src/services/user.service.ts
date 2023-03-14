import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const registerUser = async (user: IUser) => {
  const newUser = await userModel.registerUser(user);

  return newUser;
};

const userService = { registerUser };

export default userService;