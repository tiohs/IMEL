const Aluno = require('../model/Aluno');
const Geral = require('../model/geral');

const pathPC = 'pages/coordenacao';

exports.getCadastrar = async (req, res) => {
  const dados = await Aluno.showDate();
  const [cursos, turmas] = await Geral.Dates();
  res.render(pathPC + '/cadastrar', { dados, cursos, turmas });
};

exports.postCadastrar = async (req, res) => {
  const { nome, bi, curso, classe, sala, numero, turno, turma } = req.body;
  const [filePhonto, fileBI] = req.files;
  const aluno = new Aluno(
    nome,
    bi,
    numero,
    classe,
    sala,
    turno,
    bi,
    fileBI.filename,
    filePhonto.filename,
    curso,
    turma
  );
  await aluno.save();
  res.redirect('/cordenacao/cadastrar');
};

exports.getCordenador = (req, res) => {
  res.render(pathPC + '/cordenador');
};

exports.getLancarNota = (req, res) => {
  res.render(pathPC + '/lancarNota');
};

exports.getNota = (req, res) => {
  res.render(pathPC + '/nota');
};

exports.getPerfil = (req, res) => {
  res.render(pathPC + '/perfil');
};

exports.getEditarAluno = async (req, res) => {
  const parms = req.params.id;
  var result = await Aluno.showDateSingle(parms);
  res.render(pathPC + '/detalhes', { result });
};
