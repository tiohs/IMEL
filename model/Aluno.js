const knex = require('../config/db');

class Aluno {
  constructor( nome, bi, numero, classe, sala, turno, palavraPasse, photoBi, photoAvatar, idTurma, idCurso){
    this.nome = nome;
    this.bi = bi;
    this.numero = numero;
    this.classe = classe;
    this.sala = sala;
    this.turno = turno;
    this.palavraPasse = palavraPasse;
    this.photoBi = photoBi;
    this.photoAvatar = photoAvatar;
    this.idCurso = idCurso;
    this.idTurma = idTurma;
    this.nivelSession = 1;
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
