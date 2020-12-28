import { Router } from 'express';
import authController from '../controllers/auth';

const router = Router();

router.get('/', authController.getLogin);
router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);

export default router;
