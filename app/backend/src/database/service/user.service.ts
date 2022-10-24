// import tokenGenerator from '../utils/JWT';
import UserModel from '../models/User';
// import ErrorGene from '../utils/errorGene';
import { ILogin, IUser } from '../Interfaces';
import authenticateToken from '../utils/authToken';

export default class UserService {
  private _loginModel: UserModel;

  public login = async ({ email }: ILogin): Promise<IUser | null> => {
    const user = await UserModel.findOne(({ where: { email } }));
    return user;
  };

  public getRoleUser = (token: string) => {
    const roleUser = authenticateToken(token);
    console.log(roleUser);
    return roleUser.payload.role;
  };
}
