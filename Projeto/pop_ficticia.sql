SET DATESTYLE = 'DMY';

INSERT INTO agente(nome, cpf, dtnasc) VALUES 
    ('Gabrielli', 987654321, '01-01-2001'),
    ('Luiz', 122345667, '12-11-2005'),
    ('Carla', 09752678, '01-01-1993');

INSERT INTO agente_info(ferias_disp, comissao, ender, salario, nivel_acesso, cpf) VALUES 
    (0, '3,5% de comissão, sem acordos', 'Não tem endereço', 12000.95, 0, 987654321),
    (30, '1% de comissão, carga horária reduzida', 'Centro, Chapecó', 1250.95,  1, 122345667),
    (30, '2% de comissão, sem acordos', 'Efapi, Chapecó', 3450, 0, 09752678);
    --(0, '3,5% de comissão, sem acordos', 'Não tem endereço', 12000.95, 0, 1111)

INSERT INTO destino(doc_obrigatorios, nome, pais, descricao) VALUES 
    ('Documento de identificação, passaporte e visto', 'Chapecó', 'Brasil', 'Local com temperaturas amenas, geralmente possui passeios baratos'),
    ('Documento de identificação e passaporte', 'Los Angeles', 'Estados Unidos', 'Destino aconchegante, muito recomendado para famílias'),
    ('Passaporte e visto', 'Roma', 'Itália', 'Local com diferentes passeios para todos os público');

INSERT INTO interesse(cliente_nome, data_interesse, contato, qtd_passageiros, destino) VALUES 
    ('José', '01-12-2024', 'Email: josesantos@gmail.com', 2, 1),
    ('Ana', '01-01-2024', 'Email: analuz@gmail.com', 1, 2),
    ('Pedro', '12-09-2026', 'Email: pedroamaro@gmail.com', 5, 2),
    ('Lúcia', '15-03-2025', 'Email: lucialucia@gmail.com', 2, 3);

INSERT INTO cliente (cpf, nome, email, telefone, dt_nasc, renda, profissao, endereco, observacoes) VALUES 
    (6752367, 'Luiza Sonza','luizas@gmail.com', '4999873876', '01-02-1989', 27500, 'Cantora', 'São Paulo', 'Flopou'),
    (2121334, 'Ana Clara Santos','anacs@gmail.com', '5499987542', '02-03-1990', 13000, 'Bacária', 'São Paulo', 'Ta endividada');

INSERT INTO cliente (cpf, nome, email, telefone, dt_nasc, renda, profissao, endereco) VALUES 
    (3435677, 'Suzana Pereira','suziper@gmail.com', '5598767922', '03-04-1991', 2300, 'Atendente', 'São Paulo'),
    (2378234, 'Roger Cruz','cruzrog@gmail.com', '4999872736', '07-07-1992', 5900, 'Frentista', 'Chapecó'),
    (0766843, 'Pedro Pereira','prodp@gmail.com', '4999113895', '12-06-1959', 11000.60, 'Empresário', 'Porto Alegre');

INSERT INTO venda (num_orcamento, operadora, num_noites, dt_embarque, dt_venda, hotel, v_taxas, v_over, v_tarifa, observacoes, ag_vendedor, destino, cliente) VALUES 
    (000001, 'operadora1', 7, '12-05-2023', '05-04-2023', 'Hotel Luxury', 98.99, 139.67, 490.55, 'Sem observações', 122345667, 2, 6752367),
    (2, 'Outra Operadora', 7, '15-03-2024', '30-11-2023', 'Hotel Outro Exemplo', 150.00, 70.00, 700.00, 'Outras Observações', 987654321, 1, 3435677),
    (3, 'Terceira Operadora', 3, '20-05-2024', '12-05-2023', 'Hotel Terceiro Exemplo', 80.00, 40.00, 300.00, 'Observações Diferentes', 987654321, 1, 2378234),
    (4, 'Quarta Operadora', 4, '07-10-2024', '15-12-2023', 'Hotel Quarto Exemplo', 90.00, 50.00, 400.00, 'Outras Observações Quarto Exemplo', 987654321, 1, 0766843),
    (5, 'Quinta Operadora', 6, '25-09-2024', '20-12-2023', 'Hotel Quinto Exemplo', 120.00, 60.00, 600.00, 'Observações Quinto Exemplo', 987654321, 1, 6752367),
    (6, 'Sexta Operadora', 5, '05-11-2024', '25-12-2023', 'Hotel Sexto Exemplo', 100.00, 70.00, 550.00, 'Observações Sexto Exemplo', 987654321, 1, 3435677),
    (7, 'Sétima Operadora', 8, '15-01-2025', '01-01-2024', 'Hotel Sétimo Exemplo', 180.00, 90.00, 800.00, 'Observações Sétimo Exemplo', 987654321, 1, 2378234),
    (8, 'Oitava Operadora', 7, '20-03-2025', '05-02-2024', 'Hotel Oitavo Exemplo', 150.00, 75.00, 700.00, 'Observações Oitavo Exemplo', 987654321, 1, 0766843);