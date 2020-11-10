const express = require("express");
const router = express.Router();
const user = require('../controllers/users');

router.get("/aluno/perfil", user.getPerfil);
router.get("/aluno/reclamacao/", user.getReclamacao);
module.exports = router;
