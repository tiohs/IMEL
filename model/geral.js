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

  // disciplina.filter((dado)=> dado.id === 1 )[0].curso
  static desciplina() {
    return knex.select().into('disciplina');
  }

  static desciplinaIndex(id) {
    return knex.select().into('disciplina').whereRaw(`id = ${id}`);
  }

  static storeNota(dados) {
    return knex.insert(dados).into('nota');
  }
  static notaAluno(id) {
    return knex.select().into('nota').whereRaw(`idAluno = ${id}`);
  }
  static notaExiste(idAluno, trimestre, disciplina) {
    return knex
      .select()
      .into('nota')
      .whereRaw(`idAluno = ${idAluno}`)
      .whereRaw(`trimestre = ${trimestre}`)
      .whereRaw(` idDisciplina = ${disciplina}`);
  }
  static notaUpdate(id, dado) {
    return knex.whereRaw(`id = "${id}"`).update(dado).table('nota');
  }
}

export default Geral;
