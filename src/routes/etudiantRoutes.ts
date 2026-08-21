import { Router } from 'express';
import * as etudiantController from '../controllers/etudiantController';
import { verifyToken } from '../security/authMiddleware';
import { verifyRole } from '../security/roleMiddleware';

const router = Router();

router.get('/', verifyToken, etudiantController.getEtudiants);
router.get('/:id', verifyToken, etudiantController.getEtudiant);
router.post('/', verifyToken, verifyRole('admin'), etudiantController.createEtudiant);
router.put('/:id', verifyToken, verifyRole('admin'), etudiantController.replaceEtudiant);
router.patch('/:id', verifyToken, verifyRole('admin'), etudiantController.updateEtudiant);
router.delete('/:id', verifyToken, verifyRole('admin'), etudiantController.deleteEtudiant);

export default router;