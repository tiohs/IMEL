import { Router } from 'express';
import adminControllers from '../controllers/admin';
import multer from 'multer';
import auth from '../middleware/is-auth';

import configMulter from '../config/multer';
var upload = multer(configMulter);

const router = Router();
// Pagina Pricipal

router.use(auth);
router.get('/', adminControllers.getIndex);
router.get('/cadastrar', adminControllers.cadastrar);
router.post(
  '/cadastrar',
  upload.array('photo', 2),
  adminControllers.postCadastrarCordenador
);
router.get('/detalhes/:id', adminControllers.detalhes);
router.get('/gerir', adminControllers.gerir);
router.post('/update-password', adminControllers.updatePassword);

export default router;
