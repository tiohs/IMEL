const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const url = "mongodb://localhost:27017/escolaIMEL";
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const routeAluno = require('./routes/alunos.routes');
const routeAdmin = require('./routes/admin.routes');
const routeAuth = require('./routes/auth.routes');
app.use(routeAuth);
app.use("/admin", routeAdmin);
app.use(routeAluno);
app.use((req, res) => {
	res.render('login');
})
mongoose
	.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(result => {
		app.listen(3000, ()=> {
			console.log('Server on port 3000');
		});
	})
	.catch(err => {
		console.log(err);
	});
