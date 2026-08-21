import { Router } from 'express';
import * as etudiantController from '../controllers/etudiantController.ts';

const router = Router();

router.get('/', etudiantController.getEtudiants);   
router.get('/:id', etudiantController.getEtudiant);
router.post('/', etudiantController.createEtudiant);
router.put('/:id', etudiantController.replaceEtudiant);
router.patch('/:id', etudiantController.updateEtudiant);
router.delete('/:id', etudiantController.deleteEtudiant);

export default router;