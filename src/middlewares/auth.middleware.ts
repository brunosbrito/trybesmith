import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { authorization: token } = req.headers;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}