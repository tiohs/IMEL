const pathPC = 'pages/coordenacao';

exports.getCadastrar = (req, res) => {
    res.render( pathPC + '/cadastrar', {dados : [{
        numero_id: 2,
        nome: 'Hamilton Silva'
    }]});
}

exports.postCadastrar = (req, res) => {
    res.redirect('/cordenacao/cadastrar');
}

exports.getCordenador = (req, res) => {
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