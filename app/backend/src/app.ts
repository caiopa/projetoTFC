import * as express from 'express';
import 'express-async-errors';
import routerLogin from './routes/login';
import routerTeam from './routes/teams';
import routerMatches from './routes/matches';
import routerLeaderboard from './routes/leaderboard';

import errorHandler from './database/middlewares/error.middleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.use('/login', routerLogin);
    this.app.use('/teams', routerTeam);
    this.app.use('/matches', routerMatches);
    this.app.use('/leaderboard', routerLeaderboard);
    this.app.use(errorHandler);

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
