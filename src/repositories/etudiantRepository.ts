import pool from '../model/etudiantModel';

export async function findAll() {
  const resultat = await pool.query('SELECT * FROM etudiants ORDER BY id');
  return resultat.rows;
}

export async function findById(id: number) {
  const resultat = await pool.query('SELECT * FROM etudiants WHERE id = $1', [id]);
  return resultat.rows[0];
}

export async function create(etudiant: any) {
  const { nom, prenom, email } = etudiant;
  const resultat = await pool.query(
    'INSERT INTO etudiants (nom, prenom, email) VALUES ($1, $2, $3) RETURNING *',
    [nom, prenom, email]
  );
  return resultat.rows[0];
}

export async function updateFull(id: number, etudiant: any) {
  const { nom, prenom, email } = etudiant;
  const resultat = await pool.query(
    'UPDATE etudiants SET nom = $1, prenom = $2, email = $3 WHERE id = $4 RETURNING *',
    [nom, prenom, email, id]
  );
  return resultat.rows[0];
}

export async function updatePartial(id: number, champs: any) {
  const etudiantActuel = await findById(id);
  if (!etudiantActuel) return null;

  const nom = champs.nom ?? etudiantActuel.nom;
  const prenom = champs.prenom ?? etudiantActuel.prenom;
  const email = champs.email ?? etudiantActuel.email;

  const resultat = await pool.query(
    'UPDATE etudiants SET nom = $1, prenom = $2, email = $3 WHERE id = $4 RETURNING *',
    [nom, prenom, email, id]
  );
  return resultat.rows[0];
}

export async function remove(id: number) {
  const resultat = await pool.query('DELETE FROM etudiants WHERE id = $1 RETURNING *', [id]);
  return resultat.rows.length > 0;
}