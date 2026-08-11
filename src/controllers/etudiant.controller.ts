import type { Request, Response } from 'express';
import * as etudiantService from '../services/etudiant.service';

export function getEtudiants(_req: Request, res: Response) {
  res.status(200).json(etudiantService.getAllEtudiants());
}

export function getEtudiant(req: Request, res: Response) {
  const etudiant = etudiantService.getEtudiantById(Number(req.params.id));
  if (!etudiant) {
    return res.status(404).json({ message: 'Étudiant non trouvé' });
  }
  res.status(200).json(etudiant);
}

export function createEtudiant(req: Request, res: Response) {
  const nouvelEtudiant = etudiantService.createEtudiant(req.body);
  res.status(201).json(nouvelEtudiant);
}

export function replaceEtudiant(req: Request, res: Response) {
  const etudiant = etudiantService.replaceEtudiant(Number(req.params.id), req.body);
  if (!etudiant) {
    return res.status(404).json({ message: 'Étudiant non trouvé' });
  }
  res.status(200).json(etudiant);
}

export function updateEtudiant(req: Request, res: Response) {
  const etudiant = etudiantService.updateEtudiant(Number(req.params.id), req.body);
  if (!etudiant) {
    return res.status(404).json({ message: 'Étudiant non trouvé' });
  }
  res.status(200).json(etudiant);
}

export function deleteEtudiant(req: Request, res: Response) {
  const supprime = etudiantService.deleteEtudiant(Number(req.params.id));
  if (!supprime) {
    return res.status(404).json({ message: 'Étudiant non trouvé' });
  }
  res.status(204).send();
}