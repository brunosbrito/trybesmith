import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'xablau';

const JWT_CONFIG: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload: IUser) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

export default generateToken;