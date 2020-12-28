import knex from '../config/db';
class Aluno {
  constructor(nome, bi, photoBi, idCoordenador, photoAvatar, idCurso) {
    this.nome = nome;
    this.bi = bi;
    this.idCurso = idCurso;
    this.idCoordenador = idCoordenador;
    this.photoAvatar = photoAvatar;
    this.photoBi = photoBi;
    this.nivelSession = 2;
  }
  async save() {
    let dados = await knex.insert(this).into('aluno');
    return dados;
  }
  static async showDate() {
    let dados = await knex.select().into('aluno');
    return dados;
  }
}

export default Aluno;
