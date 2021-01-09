exports.getIndex = (req, res, next) => {
  res.render('pages/admin/admin');
};

exports.cadastrar = (req, res, next) => {
  res.render('pages/admin/cadastrar');
}

exports.detalhes = (req, res, next) =>{
  res.render('pages/admin/detalhes');
}

exports.gerir = (req, res, next) => {
  res.render('pages/admin/gerir');
}
