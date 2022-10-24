// import tokenGenerator from '../utils/JWT';
import UserModel from '../models/User';
// import ErrorGene from '../utils/errorGene';
import { ILogin, IUser } from '../Interfaces';

export default class UserService {
  private _loginModel: UserModel;

  public login = async ({ email }: ILogin): Promise<IUser | null> => {
    const user = await UserModel.findOne(({ where: { email } }));
    return user;
    // const token = tokenGenerator({ email });
    // return token;
  };
}
