import express from 'express';
import cors from 'cors';
import etudiantRoutes from './routes/etudiantRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/etudiants', etudiantRoutes);

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});