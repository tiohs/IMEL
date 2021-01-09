import Geral from '../model/geral';

exports.getIndex = (req, res, next) => {
  res.render('pages/admin/admin');
};

exports.cadastrar = async (req, res, next) => {
  const [cursos] = await Geral.Dates();
  res.render('pages/admin/cadastrar', { cursos });
};

exports.detalhes = (req, res, next) => {
  res.render('pages/admin/detalhes');
};

exports.gerir = (req, res, next) => {
  res.render('pages/admin/gerir');
};

exports.postCadastrarCordenador = async (req, res) => {
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
