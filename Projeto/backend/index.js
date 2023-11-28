const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pgp = require("pg-promise")({});

const usuario = "postgres";
const senha = "postgres";
const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/e22`);

app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.post("/newVenda", (req, res) => {
    
    const aNome = req.body.nome;
    const aCpf = req.body.cpf;
    const aDtnasc = req.body.dtnasc;

    db.none(
        "INSERT INTO agente(nome, cpf, dtnasc) VALUES ($1, $2, $3);",
        [aNome, aCpf, aDtnasc]
    )

    res.sendStatus(200);
})

app.post("/newCliente", (req, res) => {

})

app.post("/newDestino", (req, res) => {

})

app.post("/newAgente", (req, res) => {

    const aNome = req.body.nome;
    const aCpf = req.body.cpf;
    const aDtnasc = req.body.dtnasc;
    const aFerias = req.body.ferias;
    const aEnder = req.body.ender;
    const aComissao = req.body.comissao;
    const aSalario = req.body.salario;
    const aAcesso = req.body.acesso;

    db.none(
        "INSERT INTO agente(nome, cpf, dtnasc) VALUES ($1, $2, $3);",
        [aNome, aCpf, aDtnasc]
    )

    db.none(
        "INSERT INTO agente_info(ferias_disp, comissao, ender, salario, ultima_modif, nivel_acesso, cpf) VALUES ($1, $2, $3, $4, NOW(), $5, %6);",
        [aFerias, aComissao, aEnder, aSalario, aAcesso, aCpf]
    )

    res.sendStatus(200);
})

app.post("/newInteresse", (req, res) => {

})

app.get("/vendas", (req, res) =>{

})

app.get("/clientes", (req, res) =>{
    
})

app.get("/destinos", (req, res) =>{
    
})

app.get("/interesses", (req, res) =>{
    
})
