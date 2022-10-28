import { ITable } from '../Interfaces';
import Matches from '../models/Matches';
import Team from '../models/Team';
import LeaderboardGene from '../utils/leaderboardCal';

export default class LeaderboardService {
  constructor(private _teamModel: typeof Team, private _matchesModel: typeof Matches) {}

  private async filterAllMatchesFinishAndTeams() {
    const teams = await this._teamModel.findAll();
    const matches = await this._matchesModel.findAll({ where: { inProgress: false } });

    return { teams, matches };
  }

  private static sortLeaderboards(leaderboards: ITable[]): ITable[] {
    const sorted = leaderboards.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn);
    return sorted;
  }

  public getleaderboardHome = async ():Promise<ITable[]> => {
    const { teams, matches } = await this.filterAllMatchesFinishAndTeams();

    const homeBoard = teams.map((t) => {
      const homeMatch = matches.filter((match) => match.homeTeam === t.id);
      return {
        name: t.teamName,
        ...LeaderboardGene(homeMatch as never, t.id),
      };
    });
    const sortedBoard = LeaderboardService.sortLeaderboards(homeBoard);
    // console.log('aqui', sortedBoard);
    return sortedBoard;
  };
}
