import Aluno from '../model/Aluno';
import geral from '../model/geral';
import io from '../config/socketIO';
import Notification from '../model/notifiquetion';

const pathViews = 'pages/aluno/';

exports.getIndex = async (req, res, nex) => {
  io.getIO().emit('logado', { post: { ok: 'Logado !' } });
  let notificationIndex = await Notification.indexCount(req.session.user.id);

  res.render(pathViews + 'index', {
    user: req.session.user,
    notificationIndex,
    wel: req.flash('welcome'),
  });
};

exports.getConsultaNota = async (req, res, nex) => {
  const result = await geral.notaAluno(req.session.user.id);
  const disciplina = await geral.desciplina();
  let notificationIndex = await Notification.indexCount(req.session.user.id);

  res.render(pathViews + 'consultar', {
    user: req.session.user,
    notificationIndex,
    notas: result,
    disciplina,
  });
};

exports.getPerfil = async (req, res, nex) => {
  const [curso, turma] = await geral.datesSingle(1);
  let notificationIndex = await Notification.indexCount(req.session.user.id);

  res.render(pathViews + 'perfilAluno', {
    user: req.session.user,
    notificationIndex,
  });
};

exports.getReclamacao = async (req, res, nex) => {
  let notificationIndex = await Notification.indexCount(req.session.user.id);
  res.render(pathViews + 'reclamacao', {
    user: req.session.user,
    notificationIndex,
  });
};

exports.getTroca = async (req, res, nex) => {
  let notificationIndex = await Notification.indexCount(req.session.user.id);
  res.render(pathViews + 'troca', {
    user: req.session.user,
    notificationIndex,
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
  io.getIO().emit(`id-${date.idAluno}`, { post: 'Nota lançada!' });
  const [disciplina] = await geral.desciplinaIndex(date.idDisciplina);
  await Notification.store({
    idUser: date.idAluno,
    content: `Foi lançada a tua nota de ${disciplina.nomeDisciplina}`,
    reader: true,
  });
  res.redirect(`/cordenacao/nota/${page}`);
};

exports.apiNotaAluno = async (req, res) => {
  const id = req.params.id;
};
