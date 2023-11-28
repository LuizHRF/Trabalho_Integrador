CREATE TABLE IF NOT EXISTS agente(
    nome VARCHAR(30) NOT NULL,
    cpf INTEGER NOT NULL,
    dtnasc TIMESTAMP NOT NULL,
    CONSTRAINT pk_agente PRIMARY KEY (cpf)
);
-- INSERT INTO agente(nome, cpf, dtnasc) VALUES ('Gabrielli', 987654321, '01-01-2001');

CREATE TABLE IF NOT EXISTS agente_info(
    ferias_disp INTEGER,
    comissao VARCHAR(100),
    ender VARCHAR(100) NOT NULL,
    salario FLOAT NOT NULL,
    ultima_modif TIMESTAMP NOT NULL,
    nivel_acesso INTEGER NOT NULL,
    cpf INTEGER NOT NULL,
    CONSTRAINT pk_info PRIMARY KEY (ultima_modif, cpf),
    CONSTRAINT fk_info_agente FOREIGN KEY (cpf) REFERENCES agente(cpf)
);
--INSERT INTO agente_info(ferias_disp, comissao, ender, salario, ultima_modif, nivel_acesso, cpf) VALUES (0, '3,5% de comissão, sem acordos', 'Não tem endereço', 12000.95, NOW(), 0, 1111);

CREATE TABLE IF NOT EXISTS destino(
    id SERIAL NOT NULL,
    doc_obrigatorios VARCHAR(100),
    nome VARCHAR(100) NOT NULL,
    pais VARCHAR(20) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    CONSTRAINT pk_destino PRIMARY KEY (id)
);

--INSERT INTO destino(doc_obrigatorios, caract_principais, nome, pais, descricao) VALUES ('Documento de identificação, passaporte e visto', 'Chapecó', 'Brasil', 'Local com temperaturas amenas, geralmente possui passeios baratos');

CREATE TABLE IF NOT EXISTS interesse(
    cliente_nome VARCHAR(40) NOT NULL,
    data_interesse TIMESTAMP NOT NULL,
    contato VARCHAR(40),
    qtd_passageiros INTEGER NOT NULL,
    id SERIAL NOT NULL,
    destino INTEGER NOT NULL,
    CONSTRAINT pk_interesse PRIMARY KEY (id),
    CONSTRAINT fk_interesse_destino FOREIGN KEY (destino) REFERENCES destino(id)
);
--INSERT INTO interesse(cliente_nome, data_interesse, contato, qtd_passageiros, destino) VALUES ('José', '01-12-2024', 'Email: josesantos@gmail.com', 2, 1);

CREATE TABLE IF NOT EXISTS cliente(
    cpf INTEGER NOT NULL,
    email VARCHAR(40) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    dt_nasc TIMESTAMP NOT NULL,
    nome VARCHAR(30) NOT NULL,
    ft_documento VARCHAR(50),
    renda FLOAT NOT NULL,
    profissao VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    observacoes VARCHAR(100),
    CONSTRAINT pk_cliente PRIMARY KEY(cpf)
);

CREATE TABLE IF NOT EXISTS acompanhante(
    nome VARCHAR(30) NOT NULL,
    cpf INTEGER NOT NULL,
    dt_nasc TIMESTAMP NOT NULL,
    viagem INTEGER NOT NULL,
    CONSTRAINT pk_acompanhante PRIMARY KEY (cpf),
    CONSTRAINT fk_acompanhante_viagem FOREIGN KEY (viagem) REFERENCES venda(num_orcamento)
);

CREATE TABLE IF NOT EXISTS venda(
    num_orcamento INTEGER NOT NULL,
    operadora VARCHAR(30) NOT NULL,
    num_noites INTEGER NOT NULL,
    dt_embarque TIMESTAMP NOT NULL,
    dt_venda TIMESTAMP NOT NULL,
    hotel VARCHAR(30) NOT NULL,
    v_taxas FLOAT NOT NULL,
    v_over FLOAT NOT NULL,
    v_tarifa FLOAT NOT NULL,
    observacoes VARCHAR(100),
    ag_vendedor INTEGER NOT NULL,
    destino INTEGER NOT NULL,
    cliente INTEGER NOT NULL,
    CONSTRAINT pk_venda PRIMARY KEY (num_orcamento),
    CONSTRAINT fk_venda_agente FOREIGN KEY (ag_vendedor) REFERENCES agente(cpf),
    CONSTRAINT fk_venda_destino FOREIGN KEY (destino) REFERENCES destino(id),
    CONSTRAINT fk_venda_cliente FOREIGN KEY (cliente) REFERENCES cliente(cpf)
);
