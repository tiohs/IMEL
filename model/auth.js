import knex from '../config/db';

class auth {
  static async date(bi, password) {
    const aluno =
      (await knex
        .select()
        .into('aluno')
        .whereRaw(`bi = "${bi}" and palavraPasse = "${password}" `)) || null;
    console.log(!!aluno[0]);
    if (!!aluno[0]) return aluno[0];

    const colaborador = await knex
      .select()
      .into('colaborador')
      .whereRaw(`bi = "${bi}" and palavraPasse = "${password}" `);
    if (!!colaborador[0]) return colaborador[0];

    return null;
  }
}

export default auth;
