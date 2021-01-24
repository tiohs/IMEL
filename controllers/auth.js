import auth from '../model/auth';

exports.getLogin = (req, res, nex) => {
  res.render('login', { messages: req.flash('error') });
};

function postLoginCreate(user, url, req, res) {
  req.session.isLoggedIn = true;
  req.session.user = user;
  req.flash('welcome', true);
  return res.redirect(url);
}

exports.postLogin = async (req, res, next) => {
  const { bi, password } = req.body;

  if (bi === 'admin' && password === 'admin')
    return postLoginCreate({}, '/admin', req, res);

  const user = await auth.date(bi, password);
  if (!(user === null)) {
    if (user.nivelSession === 1)
      return postLoginCreate(user, '/aluno', req, res);

    if (user.nivelSession === 2)
      return postLoginCreate(user, '/cordenacao/', req, res);

    if (user.nivelSession === 3)
      return postLoginCreate(user, '/cordenacao/', req, res);
  }
  req.flash('error', 'Email ou senha não existente ! ');
  return res.redirect('/');
};

exports.postLogout = (req, res, nex) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
