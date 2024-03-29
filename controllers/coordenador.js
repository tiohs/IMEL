import Aluno from '../model/Aluno';
import Geral from '../model/geral';
import Colaborador from '../model/colaborador';
import Cordenador from '../model/cordenacao';
import Reclamacao from '../model/reclamacao';
import Solicitartroca from '../model/solicitar';
import { hash } from 'bcryptjs';
const pathPC = 'pages/coordenacao';

exports.getCadastrar = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  const dados1 = await Aluno.shows();
  const dados2 = await Colaborador.showDate();
  const dados = [dados1, dados2];
  const [, turmas] = await Geral.Dates();
  res.render(pathPC + '/cadastrar', {
    dados,
    turmas,
    user: req.session.user,
    reclamacaoIndex,
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

exports.getCordenador = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  const contAluno = await Aluno.alunoCurso(req.session.user.idCurso);
  const contCor = await Colaborador.colaboradorCurso(req.session.user.idCurso);
  res.render(pathPC + '/cordenador', {
    user: req.session.user,
    wel: req.flash('welcome'),
    reclamacaoIndex,
    contAluno: contAluno[0]['count(*)'],
    contCor: contCor[0]['count(*)']
  });
};

exports.getLancarNota = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  const [, turmas] = await Geral.Dates();
  res.render(pathPC + '/lancarNota', {
    user: req.session.user,
    turmas,
    reclamacaoIndex,
  });
};

exports.getNota = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  const id = req.params.id;
  const alunos = await Aluno.allTurmaAluno(id);
  const [, turma] = await Geral.datesSingle(id);
  const disciplinas = await Geral.desciplina();
  res.render(pathPC + '/nota', {
    user: req.session.user,
    turma,
    alunos,
    disciplinas,
    reclamacaoIndex,
  });
};

exports.getPerfil = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  res.render(pathPC + '/perfil', { user: req.session.user, reclamacaoIndex });
};

exports.getEditarAluno = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  const id = req.params.id;
  var result = await Aluno.show(id);
  res.render(pathPC + '/detalhes', {
    result,
    user: req.session.user,
    reclamacaoIndex,
  });
};

exports.updateData = async (req, res, next) => {
  const { id, nome, bi, turno, classe, sala } = req.body;
  await Aluno.update(id, { nome, bi, turno, classe, sala });
  res.redirect(`/cordenacao/detalhes-aluno/${id}`);
};

exports.updateDataCordenacao = async (req, res, next) => {
  const dados = req.body;
  const id = dados.id;
  delete dados.idCoordenador;
 
  if(!!dados.password){
    const palavraPasse = await hash(dados.password, 8);
     await Cordenador.update(id, { palavraPasse  });
    console.log(id);
    return res.redirect(`/admin/detalhes/${id}`);
  }
  if (req.file) {
    req.body.photoBi = req.file.filename;
  }
  if (dados) {
    await Cordenador.update(id, dados);
  }
  return res.redirect(`/admin/detalhes/${id}`);
};

exports.updateDataColaborador = async (req, res, next) => {
  const dados = req.body;
  let id = dados.idCoordenador;
  delete dados.idCoordenador;
  if (req.body.palavraPasse) {
    await Colaborador.update(id, { palavraPasse: req.body.palavraPasse });
    return res.redirect(`/admin/gerir`);
  }
  if (req.file) {
    req.body.photoBi = req.file.filename;
  }
  if (dados) {
    await Colaborador.update(id, dados);
  }

  return res.redirect(`/cordenacao/detalhes-colaborador/${id}`);
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  if (id) {
    await Cordenador.delete(id);
  }
  res.redirect('/cordenacao/cadastrar');
};
exports.getDetalhes = async (req, res, next) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  const id = req.params.id;
  const [cursos] = await Geral.Dates();
  const colaborador = await Colaborador.show(id);
  res.render(pathPC + '/detalhes-colaborador', {
    dado: colaborador[0],
    cursos,
    user: req.session.user,
    reclamacaoIndex,
  });
};

exports.getNotification = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);


  res.render(pathPC + '/notification', {
    user: req.session.user,
    reclamacaoIndex,
  });
};

exports.getTroca = async (req, res) => {
  const { id } = req.params;

  const data = await Solicitartroca.indexByTwo(id);

  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  res.render(pathPC + '/trocar', {
    user: req.session.user,
    reclamacaoIndex,
    data,
  });
};
exports.postTroca = async (req, res) => {
  const { idUSer, interessado, id } = req.body;
  const [aluno1] = await Aluno.show(idUSer);
  const [aluno2] = await Aluno.show(interessado);
  await Aluno.update(aluno1.id, {
    numero: aluno2.numero,
    classe: aluno2.classe,
    sala: aluno2.sala,
    turno: aluno2.turno,
    idCurso: aluno2.idCurso,
    idTurma: aluno2.idTurma,
  });
  await Aluno.update(aluno2.id, {
    numero: aluno1.numero,
    classe: aluno1.classe,
    sala: aluno1.sala,
    turno: aluno1.turno,
    idCurso: aluno1.idCurso,
    idTurma: aluno1.idTurma,
  });
  await Solicitartroca.update(id, { resposta : `Troca feita no dia ${ new Date }`});
  return res.redirect(`/cordenacao/troca/${id}`);
};

exports.getTrocar = async (req, res) => {
  let reclamacaoIndex = await Reclamacao.indexCount(req.session.user.idCurso);
  const trocaCurso = await Solicitartroca.indexCurso(req.session.user.idCurso);
  res.render(pathPC + '/troca', {
    user: req.session.user,
    reclamacaoIndex,
    trocaCurso
  });
}