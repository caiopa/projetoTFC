import { sign } from 'jsonwebtoken';
import dotenv = require('dotenv');
import { IUser } from '../Interfaces';

dotenv.config();

const secretKey: string = process.env.JWT_SECRET || '123456';

export default function generateToken({ email }: IUser) {
  const payload = {
    email,
  };

  const jwtconfig = {
    expiresIn: '7d',
  };

  const token = sign(payload, secretKey, jwtconfig);

  return token;
}
