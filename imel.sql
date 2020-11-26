create database imel;

use imel;

create table aluno (
	id int auto_increment,
    nome varchar(255) not null,
    bi varchar(21) not null,
    idCursos int not null,
    classe int not null,
    sala int not null,
    nrAluno int not null,
    turno varchar(20) not null,
    turma varchar(10) not null,
    nrProcesso int not null,
    palavraPasse varchar(50),
    fileName varchar(255)
);