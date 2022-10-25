// import tokenGenerator from '../utils/JWT';
// import ErrorGene from '../utils/errorGene';
import { ITeam } from '../Interfaces';
import Team from '../models/Team';
// import authenticateToken from '../utils/authToken';

export default class TeamService {
  // private _teamModel: Team;
  constructor(private _model: typeof Team) {}

  public getAllteams = async ():Promise<ITeam[]> => {
    const teams = await Team.findAll();
    return teams;
  };

  public getTeamById = async (id: string): Promise<ITeam | null> => {
    const team = await Team.findByPk(id);
    return team;
  };
}
