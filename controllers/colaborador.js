const pathPC = 'pages/colaborador';

exports.getCadastrar = (req, res) => {
    res.render( pathPC + '/cadastrar', {colaborador : true});
}

exports.postCadastrar = (req, res) => {
    res.redirect('/cordenacao/cadastrar');
}

exports.getIndex = (req, res) => {
    res.render(pathPC + '/cordenador');
}

exports.getLancarNota = (req, res) => {
    res.render(pathPC + "/lancarNota");
}

exports.getNota = (req, res ) => {
    res.render(pathPC + "/nota");
}

exports.getPerfil = (req, res) => {
    res.render(pathPC + "/perfil");
}

exports.getEditarAluno = (req, res) => {
    res.render(pathPC + '/detalhes');
}