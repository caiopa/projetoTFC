import { Router } from 'express';
import auth from '../database/middlewares/login.middleware';
import UserService from '../database/service/user.service';
import UserController from '../database/controller/user.controller';

const loginRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

loginRouter.post('/', auth, userController.login);

export default loginRouter;
