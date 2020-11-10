const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin');

// Pagina Pricipal 

router.get("/", adminControllers.getIndex);


// Add Aluno e Secreatarios do Curso e professor 

router.get('/add-aluno', adminControllers.getAddAluno);
router.get('/add-secretario', adminControllers.getAddsecretario);
router.get("/add-professor", adminControllers.getAddProfessor);

// Consulta 

// router.get("/secretarios", adminControllers.getSecretarios)
// router.get("Alunos", adminControllers.getAlunos);



module.exports = router;