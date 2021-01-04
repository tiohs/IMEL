import auth from '../model/auth';

exports.getLogin = (req, res, nex) => {
  res.render('login');
};

function postLoginCreate(user, url, req, res) {
  req.session.isLoggedIn = true;
  req.session.user = user;
  return res.redirect(url);
}

exports.postLogin = async (req, res, next) => {
  const { bi, password } = req.body;
  const user = await auth.date(bi, password);

  if (user.nivelSession === 1)
    return postLoginCreate(user, '/perfil-aluno', req, res);

  if (user.nivelSession === 2)
    return postLoginCreate(user, '/cordenacao/cadastrar', req, res);

  if (user.nivelSession === 3)
    return postLoginCreate(user, '/cordenacao/cadastrar', req, res);

  return res.redirect('/');
};

exports.postLogout = (req, res, nex) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
