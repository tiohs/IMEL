import { Router } from 'express';
import adminControllers from '../controllers/admin';

const router = Router();
// Pagina Pricipal

router.get('/', adminControllers.getIndex);

export default router;
