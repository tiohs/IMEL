import Aluno from '../model/Aluno';
import geral from '../model/geral';
import io from '../config/socketIO';

const pathViews = 'pages/aluno/';

exports.getIndex = (req, res, nex) => {
  
  io.getIO().emit('logado', {post : { ok : 'Logado !'}})
  res.render(pathViews + 'index', {
    user: req.session.user,
    wel : req.flash('welcome')
  });
};

exports.getConsultaNota = async (req, res, nex) => {
  const result = await geral.notaAluno(req.session.user.id);
  const disciplina = await geral.desciplina();
  res.render(pathViews + 'consultar', {
    user: req.session.user,
    notas: result,
    disciplina
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
  await Aluno.update(id, { palavraPasse: password });
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.postUpdatePhoto = async (req, res, nex) => {
  const { id } = req.body;
  const { filename } = req.file;
  await Aluno.update(id, { photoAvatar: filename });
  const user = await Aluno.show(id);
  req.session.user = user[0];
  res.redirect('/perfil-aluno');
};

exports.postNota = async (req, res) => {
  
  const date = req.body;
  let page = date.idd;
  delete date.idd;
  await geral.storeNota(date);
  console.log(`id-${date.idAluno}`);
  io.getIO().emit(`id-${date.idAluno}`, {post : 'Nota lançada!' })
  res.redirect(`/cordenacao/nota/${page}`);

};

exports.apiNotaAluno = async (req, res) => {
  const id = req.params.id;
};
