create database imel;

use imel;

create table aluno (
id int not null auto_increment primary key,
nome varchar (250) not null,
bi varchar (250) not null,
nif varchar(250) not null,
telefone int,
email varchar(200)
);