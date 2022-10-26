import { Response, Request, NextFunction } from 'express';
// import Matches from '../models/Matches';
// mport Matches from '../models/Matches';
import MatchesService from '../service/matches.service';
import authenticateToken from '../utils/authToken';
// import ErrorGene from '../utils/errorGene';

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

  public createMatch = async (req: Request, res: Response, _next: NextFunction) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json({ message: 'Token not found' });
    authenticateToken(req.headers.authorization as string);

    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    const createdMatch = await this._service.createMatch(req.body);
    res.status(201).json(createdMatch);
  };

  public changeProgress = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this._service.changeProgress(id);
    return res.status(200).json({ message: 'Finished' });
  };
}
