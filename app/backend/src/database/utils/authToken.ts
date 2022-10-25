import { JwtPayload, verify } from 'jsonwebtoken';

export default function authenticateToken(token: string) {
  const validateToken = verify(token, 'jwt_secret') as JwtPayload;
  return validateToken;
}
