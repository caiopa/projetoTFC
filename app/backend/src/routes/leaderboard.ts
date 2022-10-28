import { Router } from 'express';
import Matches from '../database/models/Matches';
import Team from '../database/models/Team';
import LeaderborderService from '../database/service/leaderboarder.service';
import LearderborderController from '../database/controller/leaderboard.controller';

const routerLeaderboard = Router();

const leaderboardService = new LeaderborderService(Team, Matches);
const leaderboardController = new LearderborderController(leaderboardService);

routerLeaderboard.get('/home', leaderboardController.getleaderboardHome);

export default routerLeaderboard;
