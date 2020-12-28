import { Router } from 'express';
import multer from 'multer';

import controllersCoordenador from '../controllers/coordenador';
import auth from '../middleware/is-auth';

const configMulter = require('../config/multer');
var upload = multer(configMulter);
const router = Router();

router.use(auth);

router.get('/', controllersCoordenador.getCordenador);
router.get('/cadastrar', controllersCoordenador.getCadastrar);
router.post(
  '/cadastrar',
  upload.array('photo', 2),
  controllersCoordenador.postCadastrar
);
router.get('/lancar-nota', controllersCoordenador.getLancarNota);
router.get('/nota', controllersCoordenador.getNota);
router.get('/perfil', controllersCoordenador.getPerfil);
router.get('/detalhes-aluno/:id', controllersCoordenador.getEditarAluno);

export default router;
