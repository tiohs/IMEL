import knex from '../config/db';
class Colaborador {
  constructor(nome, bi, photoBi, idCoordenador, photoAvatar, idCurso) {
    this.nome = nome;
    this.bi = bi;
    this.idCurso = idCurso;
    this.idCoordenador = idCoordenador;
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
  static async update(id, dado) {
    const dados = await knex
      .whereRaw(`id = "${id}"`)
      .update(dado)
      .table('aluno');
    return dados;
  }
}

export default Colaborador;
