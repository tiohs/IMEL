import knex from '../config/db';
import { hash, compare } from 'bcryptjs';
class Aluno {
  constructor({
    nome,
    bi,
    numero,
    classe,
    sala,
    turno,
    palavraPasse,
    photoBi,
    photoAvatar,
    idCurso,
    idTurma,
  }) {
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
  async save() {
    this.palavraPasse = await this.criptPassword();
    let dados = await knex.insert(this).into('aluno');
    return dados;
  }
  criptPassword () {
    if(this.palavraPasse){
      return hash(this.palavraPasse, 8);   
    }
  }
  static async shows() {
    let dados = await knex.select().into('aluno');
    return dados;
  }
  static async show(id) {
    let dado = await knex.select().into('aluno').whereRaw(`id = "${id}"`);
    return dado;
  }
  static async update(id, dado) {
    const dados = await knex
      .whereRaw(`id = "${id}"`)
      .update(dado)
      .table('aluno');
    return dados;
  }
  static allTurmaAluno(id) {

    return knex.table('aluno').whereRaw(`idTurma = "${id}"`);
  }
  static alunoCurso(id) {
    return knex.table('aluno').whereRaw(`idCurso = "${id}"`).count();
  }
}

export default Aluno;
