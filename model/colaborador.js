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
    this.palavraPasse = await this.criptPassword();
    let dados = await knex.insert(this).into('colaborador');
    return dados;
  }
  criptPassword () {
    if(this.palavraPasse){
      console.log(this.palavraPasse);
      return hash(this.palavraPasse, 8);   
    }
  }
  static async show(id) {
    let dado = await knex.select().into('colaborador').whereRaw(`id = "${id}"`);
    return dado;
  }
  static async showDate() {
    let dados = await knex.select().into('colaborador');
    return dados;
  }
  static async update(id, dado) {
    if(dado.palavraPasse){
      dado.palavraPasse = await hash(dado.palavraPasse, 8);
    }
    return knex.whereRaw(`id = "${id}"`).update(dado).table('colaborador');
  }
  static colaboradorCurso(id) {
    return knex.table('colaborador').whereRaw(`idCurso = "${id}"`).count();
  }
}

export default Colaborador;
