const express = require("express");
const router = express.Router();
const aluno = require('../controllers/aluno');

router.get("/consulta-nota", aluno.getConsultaNota);
router.get("/aluno", aluno.getIndex);
router.get("/troca", aluno.getTroca);
router.get("/reclamacao", aluno.getReclamacao);
router.get('/perfil-aluno', aluno.getPerfil);

module.exports = router;
