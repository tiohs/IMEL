import knex from '../config/db';

class Notification {
  store(data) {
    return knex.insert(data).into('notification');
  }
  index() {
    return knex.select().into('notification');
  }
}

export default new Notification();
