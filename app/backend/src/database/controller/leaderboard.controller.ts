import { Response, Request } from 'express';
import LeaderborderService from '../service/leaderboarder.service';

export default class LearderborderController {
  private _leaderService: LeaderborderService;

  constructor(userService: LeaderborderService) {
    this._leaderService = userService;
  }

  public getleaderboardHome = async (req: Request, res: Response) => {
    const leadersHome = await this._leaderService.getleaderboardHome();
    console.log(leadersHome);

    return res.status(200).json(leadersHome);
  };
}
