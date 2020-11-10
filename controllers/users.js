
exports.getIndex = (req, res, next) => {
  res.render("page/aluno/index");
};

exports.getPerfil = (req, res, next) => {
  res.render("page/aluno/perfil");
};

exports.getReclamacao = (req, res, next) => {
  res.render("page/aluno/reclamacao");
};