import { NextFunction, Request, Response } from 'express';
import bcrypt = require('bcryptjs');
import UserService from '../service/user.service';
import generateToken from '../utils/JWT';

const service = new UserService();

async function auth(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const user = await service.login(req.body);
  if (!user) return res.status(401).json({ message: 'Incorrect email or password' });
  // if (!user?.email || user?.password) {
  //   return res.status(401).json({ message: 'Incorrectaaaaaa email or password' });
  // }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(401).json({ message: 'Incorrect email or password' });

  const token = generateToken(email);
  res.status(200).json({ token });

  next();
}

export default auth;
