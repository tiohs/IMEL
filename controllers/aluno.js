const Aluno = require('../model/Aluno');
const geral = require('../model/geral');

const pathViews = 'pages/aluno/';

exports.getIndex = (req, res, nex) => {
  res.render(pathViews + 'index', {
    user: req.session.user,
  });
};

exports.getConsultaNota = (req, res, nex) => {
  res.render(pathViews + 'consultar', {
    user: req.session.user,
  });
};

exports.getPerfil = async (req, res, nex) => {
  const [curso, turma] = await geral.datesSingle(1);
  res.render(pathViews + 'perfilAluno', {
    user: req.session.user,
  });
};

exports.getReclamacao = (req, res, nex) => {
  res.render(pathViews + 'reclamacao', {
    user: req.session.user,
  });
};

exports.getTroca = (req, res, nex) => {
  res.render(pathViews + 'troca', {
    user: req.session.user,
  });
};

exports.updatePassword = async (req, res, nex) => {
  const { password, id } = req.body;
  await Aluno.updatePassword(password, id);
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.postUpdatePhoto = async (req, res, nex) => {
  const { id } = req.body;
  const { filename } = req.file;
  const user = await Aluno.updatePhoto(id, filename);
  req.session.user = user[0];
  res.redirect('/perfil-aluno');
};
