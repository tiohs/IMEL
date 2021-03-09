import Aluno from '../model/Aluno';
import Geral from '../model/geral';
import Colaborador from '../model/colaborador';
import Cordenador from '../model/cordenacao';

const pathPC = 'pages/coordenacao';

exports.getCadastrar = async (req, res) => {
  const dados1 = await Aluno.shows();
  const dados2 = await Colaborador.showDate();
  const dados = [dados1, dados2];
  const [cursos, turmas] = await Geral.Dates();
  res.render(pathPC + '/cadastrar', {
    dados,
    cursos,
    turmas,
    user: req.session.user,
  });
};

exports.postCadastrar = async (req, res) => {
  const { nome, bi, curso, classe, sala, numero, turno, turma } = req.body;
  const [filePhonto, fileBI] = req.files;
  const aluno = new Aluno({
    nome,
    bi,
    numero,
    classe,
    sala,
    turno,
    palavraPasse: bi,
    photoBi: fileBI.filename,
    photoAvatar: filePhonto.filename,
    idCurso: curso,
    idTurma: turma,
  });
  await aluno.save();
  res.redirect('/cordenacao/cadastrar');
};

exports.postCadastrarColaborador = async (req, res) => {
  const { nome, bi, curso, idCordenador } = req.body;
  const [filePhonto, fileBI] = req.files;
  const colaborador = new Colaborador(
    nome,
    bi,
    fileBI.filename,
    idCordenador,
    filePhonto.filename,
    curso
  );
  await colaborador.save();
  res.redirect('/cordenacao/cadastrar');
};

exports.getCordenador = (req, res) => {
  res.render(pathPC + '/cordenador', {
    user: req.session.user,
    wel: req.flash('welcome'),
  });
};

exports.getLancarNota = async (req, res) => {
  const [, turmas] = await Geral.Dates();
  res.render(pathPC + '/lancarNota', { user: req.session.user, turmas });
};

exports.getNota = async (req, res) => {
  const id = req.params.id;
  const alunos = await Aluno.allTurmaAluno(id);
  const [, turma] = await Geral.datesSingle(id);
  const disciplinas = await Geral.desciplina();
  res.render(pathPC + '/nota', {
    user: req.session.user,
    turma,
    alunos,
    disciplinas,
  });
};

exports.getPerfil = (req, res) => {
  res.render(pathPC + '/perfil', { user: req.session.user });
};

exports.getEditarAluno = async (req, res) => {
  const id = req.params.id;
  var result = await Aluno.show(id);
  res.render(pathPC + '/detalhes', { result, user: req.session.user });
};

exports.updateData = async (req, res, next) => {
  const { id, nome, bi, turno, classe, sala } = req.body;
  await Aluno.update(id, { nome, bi, turno, classe, sala });
  res.redirect(`/cordenacao/detalhes-aluno/${id}`);
};

exports.updateDataCordenacao = async (req, res, next) => {
  const dados = req.body;
  let id = dados.idCoordenador;
  delete dados.idCoordenador;
  if (req.file) {
    req.body.photoBi = req.file.filename;
  }
  if (dados) {
    await Cordenador.update(id, dados);
  }
  return res.redirect(`/admin/detalhes/${id}`);
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  if (id) {
    await Cordenador.delete(id);
  }
  res.redirect('/cordenacao/cadastrar');
};
