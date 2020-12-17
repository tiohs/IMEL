const express = require('express');
const router = express.Router();
const controllersCoordenador = require('../controllers/coordenador');
const multer = require('multer');
const configMulter = require('../config/multer');
var upload = multer(configMulter);

router.get('/', controllersCoordenador.getCordenador);

router.get('/cadastrar', controllersCoordenador.getCadastrar);
router.post('/cadastrar', upload.single('foto'), controllersCoordenador.postCadastrar);
router.get('/lancar-nota', controllersCoordenador.getLancarNota);
router.get('/nota', controllersCoordenador.getNota);
router.get('/perfil', controllersCoordenador.getPerfil);
router.get('/detalhes-aluno', controllersCoordenador.getEditarAluno);
module.exports = router;