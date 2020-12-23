const knex = require('../config/db');

class Aluno {
  constructor( nome, bi, numero, classe, sala, turno, palavraPasse, photoBi, photoAvatar, idCurso, idTurma){
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
  static async showDateSingle (id){
    let dado = await knex.select().into('aluno').whereRaw(`id = "${id}"`);
    return dado;
  } 
  static async updatePassword (password, id){
    const dados = await knex.whereRaw(`id = "${id}"`).update({palavraPasse : password}).table('aluno');
    return dados;
  }
  static async updatePhoto(id, filename){
    const dados = await knex.whereRaw(`id = "${id}"`).update({photoAvatar : filename}).table('aluno');
    return this.showDateSingle(dados);
  }
  
}

module.exports = Aluno;
