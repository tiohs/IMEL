const path = require("path");
const express = require("express");
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var cookie = require('cookie-parser');
var options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: 'upra'
};

var sessionStore = new MySQLStore(options);

// const bodyParser = require('body-parser');
const app = express();

app.use(cookie());
app.set("view engine", "ejs");
app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Session 

app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

app.use((req, res, next) => {
	// req.session.logado = true;
	console.log(req.session.logado);	 
});

// const routeAluno = require('./routes/alunos.routes');
// const routeAdmin = require('./routes/admin.routes');
// const routeAuth = require('./routes/auth.routes');
// app.use(routeAuth);
// app.use("/admin", routeAdmin);
// app.use(routeAluno);
app.use((req, res) => {
	res.render('login');
});

app.listen(3000, ()=> {
	console.log('Server on port 3000');
});
	