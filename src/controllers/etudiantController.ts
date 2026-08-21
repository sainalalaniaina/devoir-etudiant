import type { Request, Response } from 'express';
import * as etudiantService from '../services/etudiantService';

export async function getEtudiants(_req: Request, res: Response) {
  try {
    const etudiants = await etudiantService.getAllEtudiants();
    res.status(200).json(etudiants);
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur serveur', erreur });
  }
}

export async function getEtudiant(req: Request, res: Response) {
  try {
    const etudiant = await etudiantService.getEtudiantById(Number(req.params.id));
    if (!etudiant) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
    res.status(200).json(etudiant);
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur serveur', erreur });
  }
}

export async function createEtudiant(req: Request, res: Response) {
  try {
    const nouvelEtudiant = await etudiantService.createEtudiant(req.body);
    res.status(201).json(nouvelEtudiant);
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur serveur', erreur });
  }
}

export async function replaceEtudiant(req: Request, res: Response) {
  try {
    const etudiant = await etudiantService.replaceEtudiant(Number(req.params.id), req.body);
    if (!etudiant) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
    res.status(200).json(etudiant);
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur serveur', erreur });
  }
}

export async function updateEtudiant(req: Request, res: Response) {
  try {
    const etudiant = await etudiantService.updateEtudiant(Number(req.params.id), req.body);
    if (!etudiant) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
    res.status(200).json(etudiant);
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur serveur', erreur });
  }
}

export async function deleteEtudiant(req: Request, res: Response) {
  try {
    const supprime = await etudiantService.deleteEtudiant(Number(req.params.id));
    if (!supprime) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
    res.status(204).send();
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur serveur', erreur });
  }
}