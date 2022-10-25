import { Router } from 'express';
import TeamService from '../database/service/team.service';
import TeamController from '../database/controller/team.controller';
import Team from '../database/models/Team';

const teamsRouter = Router();

const teamService = new TeamService(Team);
const teamController = new TeamController(teamService);

teamsRouter.get('/', teamController.getAllTeams);

teamsRouter.get('/:id', teamController.getById);

export default teamsRouter;
