// import { Response, Request } from 'express';
// import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';

export default class UserController {
  private _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  // public login = async (req: Request, res: Response) => {
  //   const token = await this._userService.login(req.body);
  //   return res.status(200).json({ token });
  // };
}
