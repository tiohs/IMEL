import { Router } from 'express';
import adminControllers from '../controllers/admin';

const router = Router();
// Pagina Pricipal

router.get('/', adminControllers.getIndex);
router.get('/cadastrar', adminControllers.cadastrar);
router.get('/detalhes', adminControllers.detalhes);
router.get('/gerir', adminControllers.gerir);
export default router;
