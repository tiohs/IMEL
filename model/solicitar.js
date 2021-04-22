import knex from '../config/db';

class Solicitar {
  static store(data) {
    return knex.insert(data).into('solicitartroca');
  }
  static index() {
    return knex
      .select(
        'solicitartroca.*',
        'cursoPretendido.nomeCurso as cursoP',
        'alunoPost.nome as alunoP',
        'alunoPost.turno as alunoPTurno',
        'myCurso.nomeCurso as mycurso'
      )
      .from('solicitartroca')
      .join(
        'curso as cursoPretendido',
        'solicitartroca.idCurso',
        '=',
        'cursoPretendido.id'
      )
      .join(
        'aluno as alunoPost',
        'solicitartroca.idCurso',
        '=',
        'alunoPost.id'
      ).join('curso as myCurso', 'alunoPost.idCurso', '=', 'myCurso.id');
  }
  static update(post, id) {
    return knex
      .table('solicitartroca')
      .update({ interessado: id })
      .where({ id: post });
  }
  static indexCurso(idCurso) {
    return knex
      .select()
      .from('solicitartroca')
      .where({ idCurso: idCurso })
      .whereNull('resposta')
      .whereNotNull('interessado');
  }
}

export default Solicitar;
