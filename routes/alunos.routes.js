const express = require("express");
const router = express.Router();
const aluno = require('../controllers/aluno');
const auth = require('../middleware/is-auth');
const multer = require('multer');
const configMulter = require('../config/multer');
var upload = multer(configMulter);

router.get("/consulta-nota",auth, aluno.getConsultaNota);
router.get("/aluno",auth, aluno.getIndex);
router.get("/troca",auth, aluno.getTroca);
router.get("/reclamacao",auth, aluno.getReclamacao);
router.get('/perfil-aluno',auth, aluno.getPerfil);
router.post('/update-password', auth, aluno.updatePassword);
router.post("/update-photo",upload.single('photo'), aluno.postUpdatePhoto)
module.exports = router;
