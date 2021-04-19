import knex from "../config/db";

class Solicitar {
  static store(data) {
    return knex.insert(data).into("solicitartroca");
  }
  static index() {
    return knex
      .select()
      .from("solicitartroca")
      .join("curso", "solicitartroca.id", '=' , 'curso.id')
      .join("aluno", "solicitartroca.id", '=' , 'aluno.id');
  }
  static update(post, id){
    return knex.table('solicitartroca').update({ interessado : id}).where({ id : post });
  }
}

export default Solicitar;
