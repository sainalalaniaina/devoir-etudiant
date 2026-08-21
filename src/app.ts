import express from 'express';
import etudiantRoutes from './routes/etudiantRoutes';

const app = express();
app.use(express.json());

app.use('/etudiants', etudiantRoutes);

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});