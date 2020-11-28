const pathViews = 'pages/aluno/';

exports.getIndex = (req, res, nex)=> {
    res.render(pathViews + 'index');
}

exports.getConsultaNota = (req, res, nex)=> {
    res.render(pathViews + 'consultar');
}

exports.getPerfil = (req, res, nex)=> {
    res.render(pathViews + 'perfilAluno');
}

exports.getReclamacao = (req, res, nex)=> {
    res.render(pathViews + 'reclamacao');
}

exports.getTroca = (req, res, nex)=> {
    res.render(pathViews + 'troca');
}

