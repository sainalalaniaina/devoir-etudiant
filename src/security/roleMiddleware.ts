import type { Request, Response, NextFunction } from 'express';
import type { AuthUser } from '../model/etudiantTypes';

export function verifyRole(roleRequis: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const utilisateur = (req as Request & { user?: AuthUser }).user;

        if (!utilisateur || utilisateur.role !== roleRequis) {
            return res.status(403).json({ message: 'Accès refusé : rôle insuffisant' });
        }

        next();
    };
}