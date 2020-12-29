const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'teste',
  },
});

class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  showDates() {
    const dados = knex.select().into('user');
    return dados;
  }
  show(id) {
    const dados = knex.select().into('user').whereRaw(`id = "${id}"`);
    return dados;
  }
  async save() {
    await knex.insert(this).into('user');
  }
  delete(id) {
    const dados = knex.whereRaw(`id = "${id}"`).delete().table('user');
    return dados;
  }
  // Tens que criar um new verbo
  update(id, { nome, idade }) {
    const dados = knex
      .whereRaw(`id = "${id}"`)
      .update({ nome, idade })
      .table('user');
    return dados;
  }
}

const aluno = new Aluno(null, 10);

(async function () {
  await aluno.update(2, { idade: 20 });
  var dados = await aluno.showDates();
  console.log(dados);
})();
