import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces';

const validateUsername = (username: string) => {
  if (!username) {
    const message = '"username" is required';
    return ({ status: 400, message });
  }

  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    return ({ status: 422, message });
  }

  if (username.length <= 2) {
    const message = '"username" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
};

const validateVocation = (vocation: string | undefined) => {
  if (!vocation) {
    const message = '"vocation" is required';
    return ({ status: 400, message });
  }

  if (typeof vocation !== 'string') {
    const message = '"vocation" must be a string';
    return ({ status: 422, message });
  }

  if (vocation.length <= 2) {
    const message = '"vocation" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
};

const validateLevel = (level: number) => {
  if (level < 1) {
    const message = '"level" must be greater than or equal to 1';
    return ({ status: 422, message });
  }
  if (!level) {
    const message = '"level" is required';
    return ({ status: 400, message });
  }

  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    return ({ status: 422, message });
  }

  return null;
};

const validatePassword = (password: string | undefined) => {
  if (!password) {
    const message = '"password" is required';
    return ({ status: 400, message });
  }

  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    return ({ status: 422, message });
  }

  if (password.length < 8) {
    const message = '"password" length must be at least 8 characters long';
    return ({ status: 422, message });
  }

  return null;
};

export default function validateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, vocation, level, password } = req.body as IUser;

  const usernameError = validateUsername(username);
  const vocationError = validateVocation(vocation);
  const levelError = validateLevel(level as number);
  const passwordErr = validatePassword(password);

  if (usernameError) { 
    return res.status(usernameError.status).json({ message: usernameError.message }); 
  }

  if (vocationError) { 
    return res.status(vocationError.status).json({ message: vocationError.message }); 
  }

  if (levelError) return res.status(levelError.status).json({ message: levelError.message });

  if (passwordErr) return res.status(passwordErr.status).json({ message: passwordErr.message });

  next();
}