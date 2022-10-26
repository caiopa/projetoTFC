// import { NextFunction, Request, Response } from 'express';
// import { Error } from 'sequelize/types';
// import authenticateToken from '../utils/authToken';
// import ErrorGene from '../utils/errorGene';
//
// const validateToken = (_err: Error, req: Request, res: Response, next: NextFunction) => {
//   const { Authorization } = req.headers;
//   if (!Authorization) { throw new ErrorGene(404, 'Token not found'); }
//
//   try {
//     const tokenValid = authenticateToken(req.headers.authorization as string);
//
//     next();
//   } catch (err) {
//     throw new ErrorGene(404, 'aqui');
//   }
// };
//
// export default validateToken;
