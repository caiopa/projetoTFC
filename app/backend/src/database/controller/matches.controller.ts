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
    const createdMatch = await this._service.createMatch(req.body);

    res.status(201).json(createdMatch);
  };

  public changeProgress = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this._service.changeProgress(id);
    return res.status(200).json({ message: 'Finished' });
  };
}
