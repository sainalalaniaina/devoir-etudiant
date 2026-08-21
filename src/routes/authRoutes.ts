import { Router } from 'express';
import { login } from '../security/authController';

const router = Router();

router.post('/login', login);

export default router;