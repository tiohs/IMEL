import { Router } from 'express';
import aluno from '../controllers/aluno';
import auth from '../middleware/is-auth';
import multer from 'multer';

import configMulter from '../config/multer';
var upload = multer(configMulter);
const router = Router();

router.use(auth);
router.get('/consulta-nota', aluno.getConsultaNota);
router.get('/aluno', aluno.getIndex);
router.get('/troca', aluno.getTroca);
router.get('/reclamacao', aluno.getReclamacao);
router.get('/perfil-aluno', aluno.getPerfil);
router.post('/update-password', aluno.updatePassword);
router.post('/update-photo', upload.single('photo'), aluno.postUpdatePhoto);

export default router;
