import knex from '../config/db';

class Solicitar {
  static store(data) {
    return knex.insert(data).into('solicitartroca');
  }
  static index() {
    return knex
      .select(
        'solicitartroca.*',
        'aluno.idCurso as Alunocurso',
        'cursoAluno.nomeCurso as cursoAluno',
        'curso.nomeCurso as cursoPedido',
        'aluno.*'
      )
      .from('solicitartroca')
      .join('curso', 'solicitartroca.idCurso', '=', 'curso.id')
      .join('aluno', 'solicitartroca.idUser', '=', 'aluno.id')
      .join('curso as cursoAluno', 'aluno.idCurso', '=', 'curso.id');
  }
  static update(post, id) {
    return knex
      .table('solicitartroca')
      .update({ interessado: id })
      .where({ id: post });
  }
  static indexCurso(idCurso) {
    return knex
      .select().from('solicitartroca')
      .where({ idCurso: idCurso })
      .whereNull("resposta");
  }
}

export default Solicitar;
