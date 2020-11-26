const Pessoa = require('./Pessoa');
const connection = require('../config/db');



class Aluno extends Pessoa {
  constructor(nome , bi, telefone, email, endereco, idTurma){
    super(nome , bi, telefone, email, endereco);
    this.idTurma = idTurma;
  }
  constructor( nome, cargo, salario){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
  async save () {
      var dados = await knex.insert(this).into('tbl_funcionarios');
      var dados1 = await dados1;
      return await dados;
  }
}


module.exports = Aluno;
