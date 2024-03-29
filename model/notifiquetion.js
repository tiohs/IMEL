import knex from '../config/db';

class Notification {
  static store(data) {
    return knex.insert(data).into('notification');
  }
  static index() {
    return knex.select().into('notification');
  }
  static indexContent(id) {
    return knex.select().into('notification').where('idUser', id);
  }
  static indexCount(id) {
    return knex
      .select()
      .table('notification')
      .where('idUser', id)
      .where('reader', true);
  }
  static updateReadNotification(id) {
    return this.indexCount(id).update({ reader: false });
  }
}

export default Notification;
