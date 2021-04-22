import { Router } from 'express';
import multer from 'multer';

import controllersCoordenador from '../controllers/coordenador';
import auth from '../middleware/is-auth';

import configMulter from '../config/multer';
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
router.post(
  '/cadastrar-colaborador',
  upload.array('photo', 2),
  controllersCoordenador.postCadastrarColaborador
);
router.get('/lancar-nota', controllersCoordenador.getLancarNota);
router.get('/nota/:id', controllersCoordenador.getNota);
router.get('/perfil', controllersCoordenador.getPerfil);
router.get('/detalhes-aluno/:id', controllersCoordenador.getEditarAluno);
router.post('/update', controllersCoordenador.updateData);
router.post(
  '/update/coodenador',
  upload.single('photo'),
  controllersCoordenador.updateDataCordenacao
);
router.post(
  '/update/colaborador',
  upload.single('photo'),
  controllersCoordenador.updateDataColaborador
);

router.get('/delete/:id', controllersCoordenador.delete);
router.get('/detalhes-colaborador/:id', controllersCoordenador.getDetalhes);
router.get('/notification/all', controllersCoordenador.getNotification);
router.get('/troca/:id', controllersCoordenador.getTroca)
export default router;
