const Alunos = require('../model/Aluno');

exports.getIndex = (req, res ) => {
  res.render('page/admin/admin');
}

exports.getAddAluno = (req, res) => {
  res.render('page/admin/cadastrar-aluno');
}

exports.getAddsecretario = (req, res) => {
  res.render('page/admin/cadastrar-secretario');
}

exports.getAddProfessor = (req, res) => {
  res.render("page/admin/cadastrar-professor");
}