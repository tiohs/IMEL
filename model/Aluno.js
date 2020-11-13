const Pessoa = require('./Pessoa');
const connection = require('../config/db');

class Aluno extends Pessoa {
  constructor(nome , bi, telefone, email, endereco, idTurma){
    super(nome , bi, telefone, email, endereco);
    this.idTurma = idTurma;
    this.dateAluno = [this.idTurma, this.nome, this.bi, this.telefone, this.email];
  }
  addAluno(callback) {
    connection.execute(`INSERT INTO \`aluno\` ( \`id\`, \`idturma\`, \`nome\`, \`bi\`, \`telefone\`, \`email\`)
    VALUES (NULL, ? , ?, ?, ? , ? )`,this.dateAluno, callback);
  }
  upgradeAluno (idAluno, callback){
    connection.execute(`UPDATE \`aluno\` SET 
      \`idturma\` = ?, 
      \`nome\` = ?, 
      \`bi\` = ?, 
      \`telefone\` = ?, 
      \`email\` = ? 
      WHERE \`aluno\`.\`id\` = ${idAluno}`,this.dateAluno,callback)
  }
  deleteAluno (idAluno, callback){
    connection.execute(`DELETE FROM \`aluno\` WHERE \`aluno\`.\`id\` = ${idAluno}`, callback);
  }
  static getAlunos(callback) {
    connection.execute('SELECT * FROM `aluno`', callback);  
  } 

}

module.exports = Aluno;
