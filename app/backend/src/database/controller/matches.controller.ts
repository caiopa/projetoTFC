import { Response, Request } from 'express';
// import Matches from '../models/Matches';
// mport Matches from '../models/Matches';
import MatchesService from '../service/matches.service';

export default class MatchesController {
  private _service: MatchesService;
  constructor(service: MatchesService) {
    this._service = service;
  }

  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const trueFalse = inProgress === 'true';
    if (inProgress) {
      const matches = await this._service.getByProgress(trueFalse);
      return res.status(200).json(matches);
    }
    const matches = await this._service.getMatches();
    return res.status(200).json(matches);
  };

  public createMatch = async (req: Request, res: Response) => {
    console.log('body', req.body);

    const createdMatchId = await this._service.createMatch(req.body);
    console.log('created', createdMatchId);
    res.status(201).json(createdMatchId);
  };
}
