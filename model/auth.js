import knex from '../config/db';
import { compare } from 'bcryptjs';
class auth {
  static async date(bi, password) {
    const aluno = await knex
      .select()
      .into('aluno')
      .whereRaw(`bi = "${bi}"`);
    if (!!aluno[0] && await compare(password, aluno[0].palavraPasse)) return aluno[0];

    const colaborador = await knex
      .select()
      .into('colaborador')
      .whereRaw(`bi = "${bi}"`);
    if (!!colaborador[0] && await compare(password, colaborador[0].palavraPasse)) return colaborador[0];

    const coordenador = await knex
      .select()
      .into('coordenador')
      .whereRaw(`bi = "${bi}"`);
    if (!!coordenador[0]  && await compare(password, coordenador[0].palavraPasse)) return coordenador[0];

    return null;
  }
}

export default auth;
