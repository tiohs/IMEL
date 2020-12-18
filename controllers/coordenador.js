// const Aluno = require('../model/Aluno');
// const Geral = require('../model/geral');

const pathPC = 'pages/coordenacao';

exports.getCadastrar = async (req, res) => {
    // const dados = await Aluno.showDate();
    // const [cursos, turmas] = await Geral.Dates();
    res.render( pathPC + '/cadastrar', { dados : [], cursos : [], turmas : []});
}

exports.postCadastrar = (req, res) => {
    const { nome , bi, curso, sala, turma } = req.body;
    const files = req.files;
    console.log(files)
    // let aluno = new Aluno(nome, bi, 'M', '10', '10', sala, 'manha', '1234', file, turma, curso);
    // aluno.save();
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