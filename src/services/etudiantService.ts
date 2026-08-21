import * as etudiantRepository from '../repositories/etudiantRepository';

export async function getAllEtudiants() {
  return await etudiantRepository.findAll();
}

export async function getEtudiantById(id: number) {
  return await etudiantRepository.findById(id);
}

export async function createEtudiant(data: any) {
  return await etudiantRepository.create(data);
}

export async function replaceEtudiant(id: number, data: any) {
  return await etudiantRepository.updateFull(id, data);
}

export async function updateEtudiant(id: number, data: any) {
  return await etudiantRepository.updatePartial(id, data);
}

export async function deleteEtudiant(id: number) {
  return await etudiantRepository.remove(id);
}