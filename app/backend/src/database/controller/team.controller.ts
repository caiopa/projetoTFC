import { Response, Request } from 'express';
// import { ITeam } from '../Interfaces';
import TeamService from '../service/team.service';
// import authenticateToken from '../utils/authToken';

export default class TeamController {
  private _teamService: TeamService;

  constructor(teamService: TeamService) {
    this._teamService = teamService;
  }

  public getAllTeams = async (_req: Request, res: Response) => {
    const teams = await this._teamService.getAllteams();

    return res.status(200).json(teams);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this._teamService.getTeamById(id);
    return res.status(200).json(team);
  };
}
