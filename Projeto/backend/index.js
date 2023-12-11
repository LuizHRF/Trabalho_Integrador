const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Strategy, ExtractJwt } = require("passport-jwt");

const JwtStrategy = require('passport-jwt').Strategy;

const pgp = require("pg-promise")({});

const usuario = "postgres";
const senha = "postgres";
const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/embarque22`);

const app = express();
app.use(cors());
app.use(express.json());

app.use(
	session({
		secret: '"alguma_frase_muito_doida_pra_servir_de_SECRET',
		resave: false,
		saveUninitialized: false,
		cookie: { secure: true },
	}),
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
	new LocalStrategy(
		{
			usernameField: "cpf",
			passwordField: "password",
		},
		async (cpf, password, done) => {
			try {
				// busca o usuário no banco de dados
				const user = await db.oneOrNone(
					"SELECT a.cpf, i.password, i.nivel_acesso FROM agente a NATURAL JOIN agente_info i WHERE a.cpf = $1;",
					[cpf],
				);

				// se não encontrou, retorna erro
				if (!user) {
					return done(null, false, { message: "Usuário incorreto." });
				}

				// verifica se o hash da senha bate com a senha informada
				const passwordMatch = await bcrypt.compare(
					password,
					user.password,
				);

				// se senha está ok, retorna o objeto usuário
				if (passwordMatch) {
					console.log("Usuário autenticado!");
					return done(null, user);
				} else {
					// senão, retorna um erro
					return done(null, false, { message: "Senha incorreta." });
				}
			} catch (error) {
				return done(error);
			}
		},
	),
);

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: "your-secret-key",
		},
		async (payload, done) => {
			try {
				console.log(payload);
				const user = await db.oneOrNone(
					`SELECT a.cpf, i.password, i.nivel_acesso FROM agente a NATURAL JOIN agente_info i WHERE a.cpf = ${payload.cpf};`
					// [payload.cpf],
				);

				if (user) {
					done(null, user);
				} else {
					done(null, false);
				}
			} catch (error) {
				done(error, false);
			}
		},
	),
);

passport.serializeUser(function (user, cb) {
	process.nextTick(function () {
		return cb(null, {
			user_id: user.cpf,
			username: user.cpf,
		});
	});
});

passport.deserializeUser(function (user, cb) {
	process.nextTick(function () {
		return cb(null, user);
	});
});

const requireJWTAuth = passport.authenticate("jwt", { session: false });

app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

app.post(
	"/login",
	passport.authenticate("local", { session: false }),
	(req, res) => {

		// Cria o token JWT
		const token = jwt.sign({ cpf: req.body.cpf }, "your-secret-key", {
			expiresIn: "1h",
		});

		res.json({ message: "Login successful", token: token });
	},
);

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.post("/logout", function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
});

app.get("/vendas", requireJWTAuth, async (req, res) =>{

    try{
        const vendas = await db.any("SELECT v.*, v.dt_embarque::VARCHAR(11), v.dt_venda::VARCHAR(11), a.nome as ag_nome, d.nome, c.nome as cli_nome FROM venda v JOIN agente a ON v.ag_vendedor = a.cpf JOIN destino d ON d.id = v.destino JOIN cliente c ON v.cliente = c.cpf;");
        console.log('Retornando todas as vendas');
        res.json(vendas).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }

})

app.get("/clientes", requireJWTAuth, async (req, res) =>{
    try{
        const clientes = await db.any("SELECT * FROM cliente;");
        console.log('Retornando todas os clientes');
        res.json(clientes).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
})

app.get("/agentes", requireJWTAuth, async (req, res) =>{
    try{
        const agentes = await db.any("SELECT a.nome, a.cpf, a.dtnasc::VARCHAR(11), i.ferias_disp, i.comissao, i.ender, i.salario, i.nivel_acesso, i.ultima_modif::VARCHAR(11)  FROM agente a JOIN agente_info i ON a.cpf=i.cpf;");
        console.log('Retornando todos os agentes');
        res.json(agentes).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
})

app.get("/destinos",requireJWTAuth, async (req, res) =>{

    try{
        const destinos = await db.any("SELECT * FROM destino;");
        console.log('Retornando todas os destinos');
        res.json(destinos).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
    
})

app.get("/interesses", requireJWTAuth, async (req, res) =>{
    try{
        const interesses = await db.any("SELECT i.id, i.cliente_nome, i.data_interesse::VARCHAR(11), i.contato, i.qtd_passageiros, d.nome as destino FROM interesse i JOIN destino d ON i.destino = d.id;");
        console.log('Retornando todas os interesses');
        res.json(interesses).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
})

app.get("/Relatorio_agente_e_data", requireJWTAuth, async (req, res) =>{
    try{
        const relatorio = await db.any("SELECT a.nome, i.salario, i.comissao, v.* FROM agente a NATURAL JOIN agente_info i JOIN venda v ON v.ag_vendedor=a.cpf;");
        console.log('Retornando todas os relatorio de agente');
        res.json(relatorio).status(200);
    } catch(error){
        console.log(error);
        res.sendStatus(400);
    }
})

app.post("/newAgente", requireJWTAuth, (req, res) => {

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


app.post("/newVenda", requireJWTAuth, async (req, res) => {
    try {
        const vCliente = req.body.cliente;
        const vAg_vendedor = req.body.ag_vendedor;
		const vDestino = req.body.destino;
		const vHotel = req.body.hotel;
		const vV_taxas = req.body.v_taxas;
		const vV_over = req.body.v_over;
		const vV_tarifa = req.body.v_tarifa;
		const vDt_embarque = req.body.dt_embarque;
		const vDt_venda = req.body.dt_venda;
		const vObservacoes = req.body.observacoes;
		const vOperadora = req.body.operadora;
		const vNum_noites = req.body.num_noites;
		const vNum_orcamento = req.body.num_orcamento;

        db.none(
            "INSERT INTO venda (cliente, ag_vendedor, destino, hotel, v_taxas, v_over, v_tarifa, dt_embarque, dt_venda, observacoes, operadora, num_noites, num_orcamento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8::Date, $9::Date, $10, $11, $12, $13);",
            [vCliente, vAg_vendedor, vDestino, vHotel, vV_taxas, vV_over, vV_tarifa, vDt_embarque, vDt_venda, vObservacoes, vOperadora, vNum_noites, vNum_orcamento]
        );
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.post("/newInteresse", requireJWTAuth, async (req, res) => {
    try {
        const iCliente_nome = req.body.cliente_nome;
        const iContato = req.body.contato;
		const iDestino = req.body.destino;
		const iData_interesse = req.body.data_interesse;
		const iQtd_passageiros = req.body.qtd_passageiros;

        db.none(
            "INSERT INTO interesse (cliente_nome, contato, destino, data_interesse, qtd_passageiros) VALUES ($1, $2, $3, $4, $5);",
            [iCliente_nome, iContato, iDestino, iData_interesse, iQtd_passageiros]
        );
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});