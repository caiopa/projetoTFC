import tokenGenerator from '../utils/JWT';
import UserModel from '../models/User';
import ErrorGene from '../utils/errorGene';
import { IUser } from '../Interfaces';

export default class LoginService {
  private _loginModel: UserModel;

  public login = async ({ email }: IUser): Promise<string> => {
    const user = await UserModel.findOne(({ where: { email } }));

    if (!user) throw new ErrorGene(401, 'Username or email invalid');

    const token = tokenGenerator(user as UserModel);
    return token;
  };
}
