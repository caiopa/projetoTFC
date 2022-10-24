import { JwtPayload, verify } from 'jsonwebtoken';
import ErrorGene from './errorGene';

export default function authenticateToken(token: string) {
  try {
    const validateToken = verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    return validateToken;
  } catch (error) {
    throw new ErrorGene(500, 'nao sei');
  }
}
