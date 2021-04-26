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
      .join('aluno as alunoPost', 'solicitartroca.idCurso', '=', 'alunoPost.id')
      .join('curso as myCurso', 'alunoPost.idCurso', '=', 'myCurso.id');
  }
  static update(post, id) {
    return knex
      .table('solicitartroca')
      .update({ interessado: id })
      .where({ id: post });
  }
  static indexCurso(idCurso) {
    return knex
      .select('solicitartroca.*')
      .from('solicitartroca')
      .where({ idCurso: idCurso })
      .whereNull('resposta')
      .whereNotNull('interessado')
      ;
  }
  static indexByTwo(idPost) {
    return knex
    .select('solicitartroca.*', 
    'aluno1.id as idAluno',
    'aluno1.photoAvatar as Avatar1',
    'aluno1.nome as nome1',
    'aluno1.sala as sala1'
    )
    .from('solicitartroca')
    .whereRaw(` solicitartroca.id   = ${ idPost }`)
    .join('aluno as aluno1', 'solicitartroca.idUser', '=',  'aluno1.id');
  }
}

export default Solicitar;
