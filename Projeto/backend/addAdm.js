
const bcrypt = require("bcrypt");
const pgp = require("pg-promise")({});

const usuario = "postgres";
const senha = "postgres";
const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/embarque22`);

const nome = "Admin";
const cpf  = "11111111111";
const dtnasc  = "01-01-1000";
const comissao  = "admin";
const ender  = "admin";
const salario  = "0";
const acesso  = 1;
const password = "embarque22"

const salt = bcrypt.genSaltSync(10);
const hashedPasswd = bcrypt.hashSync(password, salt);

db.none("INSERT INTO agente (nome, cpf, dtnasc) VALUES ($1, $2, $3);", [
	nome,
	cpf,
    dtnasc,
]);


db.none("INSERT INTO agente_info (comissao, ender, salario, nivel_acesso, password, cpf) VALUES ($1, $2, $3, $4, $5, $6);", [
	comissao,
	ender,
    salario,
    acesso,
    hashedPasswd,
    cpf,
]);