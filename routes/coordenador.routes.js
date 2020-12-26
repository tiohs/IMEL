const express = require('express');
const router = express.Router();
const controllersCoordenador = require('../controllers/coordenador');
const auth = require('../middleware/is-auth');

const multer = require('multer');
const configMulter = require('../config/multer');
var upload = multer(configMulter);

router.get('/', auth, controllersCoordenador.getCordenador);
router.get('/cadastrar', auth, controllersCoordenador.getCadastrar);
router.post(
  '/cadastrar',
  auth,
  upload.array('photo', 2),
  controllersCoordenador.postCadastrar
);
router.get('/lancar-nota', auth, controllersCoordenador.getLancarNota);
router.get('/nota', auth, controllersCoordenador.getNota);
router.get('/perfil', auth, controllersCoordenador.getPerfil);
router.get('/detalhes-aluno/:id', auth, controllersCoordenador.getEditarAluno);
module.exports = router;
