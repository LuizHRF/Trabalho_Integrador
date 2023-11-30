const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pgp = require("pg-promise")({});

const usuario = "postgres";
const senha = "postgres";
const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/embarque22`);

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

app.post("/newInteresse", async (req, res) => {

})

app.get("/vendas", async (req, res) =>{

    try{
        const vendas = await db.any("SELECT v.*, a.nome, d.nome, c.nome FROM venda v JOIN agente a ON v.ag_vendedor = a.cpf JOIN destino d ON d.id = v.destino JOIN cliente c ON v.cliente = c.cpf;");
        console.log('Retornando todas as vendas');
        res.json(vendas).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }

})

app.get("/clientes", async (req, res) =>{
    try{
        const clientes = await db.any("SELECT * FROM cliente;");
        console.log('Retornando todas os clientes');
        res.json(clientes).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
})

app.get("/destinos", async (req, res) =>{

    try{
        const destinos = await db.any("SELECT * FROM destino;");
        console.log('Retornando todas os destinos');
        res.json(destinos).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
    
})

app.get("/interesses", async (req, res) =>{
    try{
        const interesses = await db.any("SELECT i.id, i.cliente_nome, i.data_interesse, i.contato, i.qtd_passageiros, d.nome as destino FROM interesse i JOIN destino d ON i.destino = d.id;");
        console.log('Retornando todas os interesses');
        res.json(interesses).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
})
