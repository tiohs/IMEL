const auth = require('../model/auth');

exports.getLogin = (req, res, nex) => {
	res.render("login");
};

exports.postLogin = async (req, res, next) => {
    const { bi, password } = req.body;
    const [aluno] = await auth.date(bi, password);
    if(!aluno[0]) return res.redirect('/login');
    req.session.isLoggedIn = true;
    req.session.user = aluno[0];
    if(aluno[0].nivelSession === 1){
        return res.redirect('/perfil-aluno');
    }
    
};

exports.postLogout = (req, res, nex) => {
	req.session.destroy(() => {
		res.redirect("/login");
	});
};




// User.findOne({ email: email })
// 		.then(user => {
// 			if (!user) {
// 				return res.redirect("/login");
// 			}
// 			bcryptjs.compare(password, user.password).then(doMatch => {
// 				if (doMatch) {
// 					req.session.isLoggedIn = true;
// 					req.session.user = user;
// 					return req.session.save(err => {
// 						res.redirect("/");
// 					});
// 				}
// 				return res.redirect("/login");
// 			});
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.redirect("/login");
// 		});