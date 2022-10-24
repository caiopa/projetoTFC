import { sign } from 'jsonwebtoken';
import dotenv = require('dotenv');
// import { IEmail } from '../Interfaces';

dotenv.config();

const secretKey: string = process.env.JWT_SECRET || '123456';

interface IPayload<T> {
  [key: string]: T
}

export default function generateToken<T>({ email }: IPayload<T>): string {
  const payload = {
    email,
  };

  const jwtconfig = {
    expiresIn: '7d',
  };

  const token = sign(payload, secretKey, jwtconfig);

  return token;
}
