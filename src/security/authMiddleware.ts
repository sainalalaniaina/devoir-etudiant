import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { AuthUser } from '../model/etudiantTypes';

const SECRET = process.env.JWT_SECRET || 'monSecretTD';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'Token manquant' });
    }

    const [scheme, token] = authHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Format du token invalide' });
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalide ou expiré' });
        }
        (req as Request & { user?: AuthUser }).user = decoded as AuthUser;
        next();
    });
}