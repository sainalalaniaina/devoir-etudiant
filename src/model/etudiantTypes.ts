export type Etudiant = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
};

export type EtudiantInput = Omit<Etudiant, 'id'>;
export type EtudiantPatch = Partial<EtudiantInput>;

export type AuthUser = {
  username: string;
  role: string;
};
