import * as etudiantRepository from '../repositories/etudiant.repository';

export function getAllEtudiants() {
  return etudiantRepository.findAll();
}

export function getEtudiantById(id: number) {
  return etudiantRepository.findById(id);
}

export function createEtudiant(data: any) {
  return etudiantRepository.create(data);
}

export function replaceEtudiant(id: number, data: any) {
  return etudiantRepository.updateFull(id, data);
}

export function updateEtudiant(id: number, data: any) {
  return etudiantRepository.updatePartial(id, data);
}

export function deleteEtudiant(id: number) {
  return etudiantRepository.remove(id);
}