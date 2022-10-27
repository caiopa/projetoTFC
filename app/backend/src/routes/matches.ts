import { Router } from 'express';
// import validateToken from '../database/middlewares/matches.middleware';
import MatchesService from '../database/service/matches.service';
import MatchesController from '../database/controller/matches.controller';
// import Matches from '../database/models/Matches';

const matchesRouter = Router();

const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

matchesRouter.get('/', matchesController.getMatches);

matchesRouter.post('/', /* validateToken */ matchesController.createMatch);

matchesRouter.patch('/:id/finish', matchesController.changeProgress);

matchesRouter.patch('/:id', matchesController.updateMatch);

export default matchesRouter;
