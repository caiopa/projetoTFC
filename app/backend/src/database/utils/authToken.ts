import { JwtPayload, verify } from 'jsonwebtoken';
import ErrorGene from './errorGene';

export default function authenticateToken(token: string) {
  try {
    const validateToken = verify(token, 'jwt_secret') as JwtPayload;
    return validateToken;
  } catch (error) {
    throw new ErrorGene(401, 'Token must be a valid token');
  }
}
