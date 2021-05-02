import Geral from '../model/geral';
import Cordenador from '../model/cordenacao';
import Aluno from '../model/Aluno';
import Colaborador from '../model/colaborador';
import Curso from '../model/curso';

exports.getIndex = async (req, res, next) => {
  const cordenador = await Cordenador.showDate();
  const aluno = await Aluno.shows();
  const colaborador = await Colaborador.showDate();

  res.render('pages/admin/admin', {
    wel: req.flash('welcome'),
    cordenador,
    aluno,
    colaborador,
  });
};

exports.cadastrar = async (req, res, next) => {
  const [cursos] = await Geral.Dates();
  const dados = await Cordenador.showDate();
  res.render('pages/admin/cadastrar', { cursos, dados });
};

exports.detalhes = async (req, res, next) => {
  const id = req.params.id;
  const [cursos] = await Geral.Dates();
  const cordenador = await Cordenador.show(id);
  res.render('pages/admin/detalhes', { dado: cordenador[0], cursos });
};

exports.gerir = async (req, res, next) => {
  const dados1 = await Aluno.shows();
  const dados2 = await Colaborador.showDate();
  const dados = [dados1, dados2];
  res.render('pages/admin/gerir', { dados });
};

exports.postCadastrarCordenador = async (req, res) => {
  const { nome, bi, curso, descricao } = req.body;
  const [filePhonto, fileBI] = req.files;
  const cursos = await Curso.store({ nomeCurso : curso, descricao });
  const cordenador = new Cordenador(
    nome,
    bi,
    fileBI.filename,
    filePhonto.filename,
    cursos
  );
  await cordenador.save();
  res.redirect('/admin/cadastrar');
};

exports.updatePassword = async (req, res, nex) => {
  const { password, id } = req.body;
  await Aluno.update(id, { palavraPasse: password });
  req.session.destroy(() => {
    res.redirect('/gerir');
  });
};
