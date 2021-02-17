import knex from '../config/db';

class Notification {
  static store(data) {
    return knex.insert(data).into('notification');
  }
  static index() {
    return knex.select().into('notification');
  }
  static indexCount(id) {
    return knex
      .select()
      .table('notification')
      .where('idUser', id)
      .where('reader', true);
  }
}

export default Notification;
