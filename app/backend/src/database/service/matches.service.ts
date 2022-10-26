// import { IMatches } from '../Interfaces';
import Matches from '../models/Matches';
import Team from '../models/Team';

export default class MatchesService {
  private _modelMatches: Matches;
  private _modelTeam: Team;

  public getMatches = async () => {
    const matches = await Matches.findAll({ include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ] });
    return matches;
  };
}
