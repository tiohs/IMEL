const knex = require('../config/db');

class auth {
    static async date (bi, password){
        const aluno = await knex.select().into('aluno').whereRaw(`bi = "${bi}" and palavraPasse = "${password}" `);
        return [aluno];
    }
}

module.exports = auth;