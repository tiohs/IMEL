import knex from '../config/db';
class Colaborador {
  constructor(nome, bi, photoBi, photoAvatar, idCurso) {
    this.nome = nome;
    this.bi = bi;
    this.idCurso = idCurso;
    this.photoAvatar = photoAvatar;
    this.photoBi = photoBi;
    this.nivelSession = 2;
    this.palavraPasse = bi;
  }
  async save() {
    let dados = await knex.insert(this).into('colaborador');
    return dados;
  }
  static async showDate() {
    let dados = await knex.select().into('colaborador');
    return dados;
  }
}

export default Colaborador;
