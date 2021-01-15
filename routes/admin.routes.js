import { Router } from 'express';
import adminControllers from '../controllers/admin';
import multer from 'multer';

import configMulter from '../config/multer';
var upload = multer(configMulter);

const router = Router();
// Pagina Pricipal

router.get('/', adminControllers.getIndex);
router.get('/cadastrar', adminControllers.cadastrar);
router.post(
  '/cadastrar',
  upload.array('photo', 2),
  adminControllers.postCadastrarCordenador
);
router.get('/detalhes', adminControllers.detalhes);
router.get('/gerir', adminControllers.gerir);
export default router;
