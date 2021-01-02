// Modules

import { join } from 'path';
import express from 'express';
import { urlencoded } from 'body-parser';
import session from 'express-session';

// Routes
import routerAluno from './routes/alunos.routes';
import routerCoordenador from './routes/coordenador.routes';
import routerAuth from './routes/auth.routes';
import routerAdmin from './routes/admin.routes';

// Store Session
var MySQLStore = require('express-mysql-session')(session);

var options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'imel',
};

var sessionStore = new MySQLStore(options);

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'uploads')));

app.use(
  session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    },
  })
);
app.post('/update', (req, res, next) => {
  const dados = req.body;
  console.log(dados);
});
app.use(routerAuth);
app.use('/cordenacao', routerCoordenador);
app.use(routerAluno);

app.listen(3000, () => {
  console.log('Server on port 3000');
});
