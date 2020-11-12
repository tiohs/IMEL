const Aluno = require('../model/Aluno');

exports.getIndex = (req, res ) => {
  res.render('page/admin/admin');
}

exports.getAddAluno = (req, res) => {
  const aluno = new Aluno('Hamilton Silva', '123ed', 944783619, "hamiltonsilva55@gmail.com", "Luanda Angola", 12);
  aluno.deleteAluno(5,(err, result) => {
    console.log(result);
  });
}

exports.getAddsecretario = (req, res) => {
  res.render('page/admin/cadastrar-secretario');
}

exports.getAddProfessor = (req, res) => {
  res.render("page/admin/cadastrar-professor");
}