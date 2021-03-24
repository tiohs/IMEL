import knex from '../config/db';

class Reclamacao {
  static store(data) {
    return knex.insert(data).into('reclamacao');
  }
  static index() {
    return knex.select().into('reclamacao');
  }
  static indexCount(id) {
    return knex.select().table('reclamacao').where('idCurso', id);
    // .where('reader', true);
  }
  static updateReadNotification(id) {
    return this.indexCount(id).update({ reader: false });
  }
}

export default Reclamacao;
