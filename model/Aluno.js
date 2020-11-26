const knex = require('knex');

class Aluno {
  constructor( nome, bi, idCurso, classe, sala, nrAluno, turno, turma, nrProcesso, palavraPasse, fileName){
    this.nome = nome;
    this.bi = bi;
    this.idCurso = idCurso;
    this.classe = classe;
    this.sala = sala;
    this.nrAluno = nrAluno;
    this.turno = turno;
    this.turma = turma;
    this.nrProcesso = nrProcesso;
    this.palavraPasse = palavraPasse;
    this.fileName = fileName;
  }
  async save () {
      var dados = await knex.insert(this).into('tbl_funcionarios');
      return dados;
  }
}

module.exports = Aluno;
