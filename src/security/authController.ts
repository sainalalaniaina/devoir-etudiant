import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'monSecretTD';

const utilisateurs = [
    { username: 'admin', password: '1234', role: 'admin' },
    { username: 'etudiant1', password: '1234', role: 'user' },
];

export function login(req: Request, res: Response) {
    const { username, password } = req.body;

    const utilisateur = utilisateurs.find(
        u => u.username === username && u.password === password
    );

    if (!utilisateur) {
        return res.status(401).json({ message: 'Identifiants invalides' });
    }

    const token = jwt.sign(
        { username: utilisateur.username, role: utilisateur.role },
        SECRET,
        { expiresIn: '1h' }
    );

    res.status(200).json({ token });
}