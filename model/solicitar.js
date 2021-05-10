import knex from '../config/db';

class Solicitar {
  static store(data) {
    return knex.insert(data).into('solicitartroca');
  }
  static index() {
    return knex
      .select('solicitartroca.*', 
      'alunoP.nome as alunoP',
      'cursomy.nomeCurso as mycurso',
      'alunoP.turno as alunoPTurno',
      'curso.nomeCurso as cursoP')
      .from('solicitartroca')
      .join('aluno as alunoP', 'solicitartroca.idUSer', '=', 'alunoP.id')
      .join('curso as cursomy', 'alunoP.idCurso', '=', 'cursomy.id')
      .join('curso', 'solicitartroca.idCurso', '=', 'curso.id');
  }
  static checkId(id) {
      return  knex.select().from('solicitartroca').where({ idUser :  id});
  }
  static update(post,data) {
    return knex
      .table('solicitartroca')
      .update(data)
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
    'aluno1.id as idAluno1',
    'aluno1.photoAvatar as Avatar1',
    'aluno1.nome as nome1',
    'aluno1.sala as sala1',
    'curso1.nomeCurso as nomeCurso1',
    'turma1.nome as nomeTurma1',
    'aluno2.id as idAluno2',
    'aluno2.photoAvatar as Avatar2',
    'aluno2.nome as nome2',
    'aluno2.sala as sala2',
    'curso2.nomeCurso as nomeCurso2',
    'turma2.nome as nomeTurma2'
    )
    .from('solicitartroca')
    .whereRaw(` solicitartroca.id   = ${ idPost }`)
    .join('aluno as aluno1', 'solicitartroca.idUser', '=',  'aluno1.id')
    .join('curso as curso1', 'aluno1.idCurso', '=' , 'curso1.id')
    .join('turma as turma1', 'aluno1.idTurma', '=', 'turma1.id')
    .join('aluno as aluno2', 'solicitartroca.interessado', '=',  'aluno2.id')
    .join('curso as curso2', 'aluno2.idCurso', '=' , 'curso2.id')
    .join('turma as turma2', 'aluno2.idTurma', '=', 'turma2.id');
  }
}

export default Solicitar;
