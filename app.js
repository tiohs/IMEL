const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var options = {
	host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'imel'
};

var sessionStore = new MySQLStore(options);

const app = express();


app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));



app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24,
		httpOnly: true
	}
}))

const routerAluno = require('./routes/alunos.routes');
const routerCoordenador = require('./routes/coordenador.routes');
const routerAuth = require('./routes/auth.routes');


app.use(routerAuth);
app.use('/cordenacao', routerCoordenador );
app.use(routerAluno);
app.listen(3000, ()=> {
	console.log('Server on port 3000');
});
