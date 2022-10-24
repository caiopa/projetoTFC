import { NextFunction, Request, Response } from 'express';
// import UserService from '../service/user.service';
// import { generateToken } from '../utils/JWT';

// const service = new UserService();

async function auth(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
}

export default auth;
