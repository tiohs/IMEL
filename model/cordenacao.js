import knex from '../config/db';
import { hash } from 'bcryptjs';
class Colaborador {
  constructor(nome, bi, photoBi, photoAvatar, idCurso) {
    this.nome = nome;
    this.bi = bi;
    this.idCurso = idCurso;
    this.photoAvatar = photoAvatar;
    this.photoBi = photoBi;
    this.nivelSession = 3;
    this.palavraPasse = bi;
  }
  async save() {
    this.palavraPasse = await this.criptPassword();
    let dados = await knex.insert(this).into('coordenador');
    return dados;
  }
  criptPassword () {
    if(this.palavraPasse){
      console.log(this.palavraPasse);
      return hash(this.palavraPasse, 8);   
    }
  }
  static async showDate() {
    let dados = await knex.select().into('coordenador');
    return dados;
  }
  static async show(id) {
    let dado = await knex.select().into('coordenador').whereRaw(`id = "${id}"`);
    return dado;
  }
  static update(id, dado) {
    return knex.whereRaw(`id = "${id}"`).update(dado).table('coordenador');
  }
  static async delete(id) {
    return knex.whereRaw(`id = ${1}`).delete().table('coordenador');
  }
}

export default Colaborador;
