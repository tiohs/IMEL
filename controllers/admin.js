import Geral from '../model/geral';
import Cordenador from '../model/cordenacao';
exports.getIndex = (req, res, next) => {
  res.render('pages/admin/admin');
};

exports.cadastrar = async (req, res, next) => {
  const [cursos] = await Geral.Dates();
  const result = await Cordenador.showDate();
  res.render('pages/admin/cadastrar', { cursos, result });
};

exports.detalhes = (req, res, next) => {
  res.render('pages/admin/detalhes');
};

exports.gerir = (req, res, next) => {
  res.render('pages/admin/gerir');
};

exports.postCadastrarCordenador = async (req, res) => {
  const { nome, bi, curso } = req.body;
  const [filePhonto, fileBI] = req.files;
  const cordenador = new Cordenador(
    nome,
    bi,
    fileBI.filename,
    filePhonto.filename,
    curso
  );
  await cordenador.save();
  res.redirect('/admin/cadastrar');
};
