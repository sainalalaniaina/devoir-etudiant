import etudiants from '../model/etudiant.model';

export function findAll() {
  return etudiants;
}

export function findById(id: number) {
  return etudiants.find(e => e.id === id);
}

export function create(etudiant: any) {
  const nouvelId = etudiants.length > 0 ? etudiants[etudiants.length - 1].id + 1 : 1;
  const nouvelEtudiant = { id: nouvelId, ...etudiant };
  etudiants.push(nouvelEtudiant);
  return nouvelEtudiant;
}

export function updateFull(id: number, etudiant: any) {
  const index = etudiants.findIndex(e => e.id === id);
  if (index === -1) return null;
  etudiants[index] = { id, ...etudiant };
  return etudiants[index];
}

export function updatePartial(id: number, champs: any) {
  const index = etudiants.findIndex(e => e.id === id);
  if (index === -1) return null;
  etudiants[index] = { ...etudiants[index], ...champs };
  return etudiants[index];
}

export function remove(id: number) {
  const index = etudiants.findIndex(e => e.id === id);
  if (index === -1) return false;
  etudiants.splice(index, 1);
  return true;
}