import { Response, Request } from 'express';
import MatchesService from '../service/matches.service';

export default class MatchesController {
  private _service: MatchesService;
  constructor(service: MatchesService) {
    this._service = service;
  }

  public getMatches = async (req: Request, res: Response) => {
    const matches = await this._service.getMatches();

    return res.status(200).json(matches);
  };
}
