import { IMatche, IMatcheUp } from '../Interfaces';
import Matches from '../models/Matches';
import Team from '../models/Team';
import ErrorGene from '../utils/errorGene';

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

  private static teamExists = async (id: number): Promise<void> => {
    const team = await Team.findByPk(id);
    if (!team) throw new ErrorGene(404, 'There is no team with such id!');
  };

  public createMatch = async (body: IMatche): Promise<IMatche> => {
    await MatchesService.teamExists(body.homeTeam);
    await MatchesService.teamExists(body.awayTeam);

    const createdMatch = await Matches.create({ ...body, inProgress: true });
    return createdMatch;
  };

  public changeProgress = async (id: string): Promise<void> => {
    await Matches.update({ inProgress: false }, { where: { id } });
  };

  public updateMatch = async ({ homeTeamGoals, awayTeamGoals }: IMatcheUp, id: string)
  : Promise<void> => {
    await Matches.update({
      homeTeamGoals, awayTeamGoals }, { where: { id } });
  };
}
