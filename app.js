// Modules

import { join } from 'path';
import express from 'express';
import { urlencoded } from 'body-parser';
import session from 'express-session';
import flash from 'connect-flash';

const app = express();

const server = require('http').Server(app);
const io = require('./config/socketIO').init(server);

io.on('connection', (socket) => {
  console.log('a user connected');
});
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

app.use(flash());

app.use('/admin', routerAdmin);
app.use(routerAuth);
app.use('/cordenacao', routerCoordenador);
app.use(routerAluno);

server.listen(3000, () => {
  console.log('listening on *:3000');
});
