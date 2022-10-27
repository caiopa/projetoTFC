// import { IUser, IUserCreateDTO } from '../entities/IUser';

export interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ITeam {
  id: number;
  teamName: string;
}

export interface IMatches {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome: {
    teamName: string;
  },
  teamAway: {
    teamName: string;
  }
}

export interface IMatche {
  homeTeam: number, // O valor deve ser o id do time
  awayTeam: number, // O valor deve ser o id do time
  homeTeamGoals: number,
  awayTeamGoals: number,
}
export interface IMatcheCreated {
  id?: number
  homeTeam: number, // O valor deve
  awayTeam: number, // O valor deve
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IMatcheUp {
  id?: number,
  homeTeamGoals: number,
  awayTeamGoals: number
}
