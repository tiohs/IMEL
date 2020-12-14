const knex = require('../config/db');

class Aluno {
  constructor( nome, bi, sexo, numero, classe, sala, turno, palavraPasse, filename, idTurma, idCurso){
    this.nome = nome;
    this.bi = bi;
    this.sexo = sexo;
    this.numero = numero;
    this.classe = classe;
    this.sala = sala;
    this.turno = turno;
    this.palavraPasse = palavraPasse;
    this.filename = filename;
    this.idTurma = idTurma;
    this.idCurso = idCurso;
  }
  async save () {
      let dados = await knex.insert(this).into('aluno');
      return dados;
  }
   static async showDate (){
    let dados = await knex.select().into('aluno');
    return dados;
  }
}

module.exports = Aluno;
