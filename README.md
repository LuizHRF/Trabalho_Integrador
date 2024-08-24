# Trabalho_Integrador
Repositório criado com o propósito de armazenar e fazer controle de versões do trabalho integrador das disciplinas de Engenharia de Software I, Banco de Dados I e Programação II.

Trabalho desenvolvido no 4º período do curso de Ciência da Computação - UFFS - Campus Chapecó

# Gerenciador de fluxos internos para uma agência de viagens.

Esse app tem como objetivo organizar, monitorar e gerenciar diferentes aspectos operacionais da agência, como clientes, agentes, destinos, interesses e vendas.

## Funcionalidades Principais do App:

- Painel de Controle (Dashboard):

  Painel inicial que exibe informações gerais e encapsula as demais funcionalidades.

- Gerenciamento de Agentes:

  Módulo para gerenciar os agentes da agência. Permite adicionar, editar e remover agentes, bem como visualizar o desempenho de cada um deles.

- Gerenciamento de Clientes:

  Funcionalidade que centraliza o cadastro e o acompanhamento dos clientes. O módulo inclui informações como histórico de viagens, preferências e interesses de cada cliente.

- Gerenciamento de Destinos:

  Módulo voltado para a gestão de destinos oferecidos pela agência. Inclui a possibilidade de cadastrar novos destinos e atualizar informações.

- Gerenciamento de Interesses:

  Este componente está relacionado à identificação e organização dos interesses dos clientes, ajudando a agência a oferecer pacotes personalizados e campanhas de marketing direcionadas.

- Gerenciamento de Vendas:

  Funcionalidade que acompanha as vendas realizadas pela agência, gerenciando o processo de reserva, pagamento e confirmação de viagens.

- Autenticação e Controle de Acesso:

  Componente de login, presença de um sistema de autenticação para proteger o acesso ao sistema, com diferentes níveis de permissões (como administrador, agente, etc.).

- Interface do Usuário:

  Com a presença de componentes como Header.jsx, TemplatePagina.jsx e background.jsx, a interface do app busca ser intuitiva e organizada, com elementos reutilizáveis em diferentes páginas para manter a consistência visual.


## Público-Alvo:
O app é voltado para equipes internas de agências de viagens, como administradores, gerentes e agentes de viagens, que precisam de uma ferramenta para organizar suas operações de maneira centralizada e eficiente.

# Organização:

* ## Documentação:

  Possui:
  * As documentações referentes ao projeto;
  * Os roteiros de entrevista com o cliente bem como o documento de requisitos;
  * O modelo conceitual do banco de dados da aplicação;
  * O protótipo do script de criação do banco de daods;

* ## Projeto:

  ### 1. backend:

  - addAdm.js: Um script usado para adicionar administradores no backend.
  - index.js: Arquivo principal do backend, onde a aplicação pode ser iniciada.
  - package.json: Contém informações sobre dependências e scripts do backend.

  ### 2. frontend:
  #### public:
  Coletânea imagens e demais arquivos públicos
  
  - src:

    - components:

      - Dashboard: Componente ou conjunto de componentes para exibição de informações gerais.
      - Gerenciar_Agentes: Componente para gerenciar agentes.
      - Gerenciar_Clientes: Componente para gerenciar clientes.
      - Gerenciar_Destinos: Componente para gerenciar destinos.
      - Gerenciar_Interesses: Componente para gerenciar interesses.
      - Gerenciar_Vendas: Componente para gerenciar vendas.
      - DataTable.jsx: Componente para exibição de tabelas de dados.
      - Header.jsx: Componente para o cabeçalho da aplicação.
      - Login.jsx: Componente para a página de login.
      - TemplatePagina.jsx: Componente que serve como modelo para as páginas.

    - index.js: Arquivo principal do frontend, onde a aplicação React é inicializada.

  ### 3. Outros Arquivos:
    - E22_BD_script.sql: Script SQL, usado para configurar o banco de dados.
    - pop_ficticia.sql: Outro script SQL, usado para adicionar dados fictícios ao banco de dados.


Agosto de 2023
Gabrielli Lara e Luiz Faccio
