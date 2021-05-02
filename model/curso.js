import knex from '../config/db';

class curso {
  static store(data){
    return knex.insert(data).into('curso');
  }
}

export default curso;
