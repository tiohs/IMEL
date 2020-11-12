const path = require("path");
const express = require("express");
// const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// const routeAluno = require('./routes/alunos.routes');
const routeAdmin = require('./routes/admin.routes');
// const routeAuth = require('./routes/auth.routes');
// app.use(routeAuth);
app.use("/admin", routeAdmin);
// app.use(routeAluno);
app.use((req, res) => {
	res.render('login');
})

app.listen(3000, ()=> {
	console.log('Server on port 3000');
});
	