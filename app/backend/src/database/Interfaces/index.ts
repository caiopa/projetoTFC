// import { IUser, IUserCreateDTO } from '../entities/IUser';

export interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}
