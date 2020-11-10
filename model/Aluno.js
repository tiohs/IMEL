 const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
  },
  bi : {
    type: String,
    required: true
  }
  ,
	password: {
		type: String,
		required: true,
  },
  cidade: {
    type: String,
    required: true
  },
  classe: {
    type: String,
    required: true
  },
  Turma : {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Aluno", userSchema);