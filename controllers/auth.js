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
  switch (user.nivelSession) {
    case 1:
      postLoginCreate(user, '/perfil-aluno', req, res);
      break;
    case 2:
      postLoginCreate(user, '/cordenacao/cadastrar', req, res);
    default:
      res.redirect('/');
      break;
  }
};

exports.postLogout = (req, res, nex) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
