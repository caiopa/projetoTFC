// import { IMatches } from '../Interfaces';
import { IMatche } from '../Interfaces';
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

  public getByProgress = async (inProgress: boolean) => {
    const matches = await Matches.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  };

  public createMatch = async (body: IMatche): Promise<IMatche> => {
    const createdMatch = await Matches.create({ ...body, inProgress: true });
    return createdMatch;
  };

  public changeProgress = async (id: string): Promise<void> => {
    await Matches.update({ inProgress: false }, { where: { id } });
  };
}
