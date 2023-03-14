import loginModel from '../models/login.model';

const login = async (userLogin: string) => {
  const user = await loginModel.login(userLogin);

  return user;
};

const loginService = { login };

export default loginService;