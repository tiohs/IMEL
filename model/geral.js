import knex from '../config/db';

class Geral {
  static async Dates() {
    const curso = await knex.select().into('curso');
    const turma = await knex.select().into('turma');
    return [curso, turma];
  }
  static async datesSingle(id) {
    const curso = await knex.select().into('curso').whereRaw(`id = ${id}`);
    const turma = await knex.select().into('turma').whereRaw(`id = ${id}`);
    return [curso, turma];
  }
}

export default Geral;
