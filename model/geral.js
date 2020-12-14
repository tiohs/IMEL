const knex = require('../config/db');

class Geral {
    static async Dates (){
        const curso = await knex.select().into('curso');
        const turma = await knex.select().into('turma');
        return [curso , turma];
    }
}

module.exports = Geral;