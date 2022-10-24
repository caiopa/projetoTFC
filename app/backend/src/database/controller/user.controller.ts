import { Response, Request } from 'express';
// import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';

export default class loginController {
  private _userService: UserService;

  constructor(loginService: UserService) {
    this._userService = loginService;
  }

  public login = async (req: Request, res: Response) => {
    const token = await this._userService.login(req.body);
    return res.status(200).json({ token });
  };
}
