import { Response, Request } from 'express';
import UserService from '../service/user.service';
// import authenticateToken from '../utils/authToken';

export default class UserController {
  private _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  // public login = async (req: Request, res: Response) => {
  //   const token = await this._userService.login(req.body);
  //   return res.status(200).json({ token });
  // };

  public getRoleUser = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const role = this._userService.getRoleUser(authorization as string);

    return res.status(200).json({ role });
  };
}
