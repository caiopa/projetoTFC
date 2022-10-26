import { Router } from 'express';
import MatchesService from '../database/service/matches.service';
import MatchesController from '../database/controller/matches.controller';
// import Matches from '../database/models/Matches';

const matchesRouter = Router();

const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

matchesRouter.get('/', matchesController.getMatches);

matchesRouter.post('/', matchesController.createMatch);

export default matchesRouter;
