# README

Neste "Readme" você vai encontrar os passos para rodar o app e algumas regras e indicações para o desenvolvimento

### Ferramentas utilizadas:

- Nodejs (mínimo 20.6) e npm
- Adonis 6 e typescript
- Postgresql
- Docker

### Como rodar o projeto?

- Clone o repositório para sua máquina
- Crie um arquivo .env na raiz do projeto
- Rode "npm install" para instalar as dependências
- Rode "docker compose up -d" para subir o container do banco de dados (necessário ter o docker instalado)
- Rode "npm run dev" para iniciar a aplicação
- Para testar as rotas pegue o arquivo do insomnia que está na pasta raiz do projeto(Shopper_test_back_end_insomnia)

### Estrutura do projeto

- Controllers: Recebe a entrada de dados, chama o responsável para processar a requisição, e retorna a resposta
- Validators: Valida os dados quando requisitado
- Dtos: Trasnsporta os dados validados pelos Controllers para os UseCases e Repositories
- Middlewares: Intercepta requisições antes de chegarem aos Controllers, normalmente para fazer permitir ou negar acesso
- Models: Representam as entidades do app e tabelas sql, podem possuir regras de negócio gerais, como criptografar senhas.
- Repositories: Conectam-se com o banco de dados por meio das Models
- Services: Implementação de libs ou apis externas.
- UseCases: Representam funcionalidades do app, onde são implementadas a maioria das regras de negócio
- Utils: São qualquer código necessário para o app que não entram nas pastas anteriores, como constantes e mensagens de erro

### Observações sobre a estrutura

- Apenas Repositories podem ler dados do banco de dados por meio das Models
- Apenas Repositories podem alterar ou criar dados no banco de dados por meio das Models
- Validators e Dtos não devem possuir dados desnecessários
- Repositories e UseCases são serviços e podem ser chamados pelos Controllers
- Não criar UseCases para funcionalidades se é possível implementá-la numa consulta dos Repositories, ex: mostrar usuário
- Repositories não devem gerar dados que ele mesmo necessite. Se for necessário gerar algum dado, deve ser usado um UseCase ou uma função externa
- Não acumular Middlewares que fazem a mesma coisa numa mesma rota

### Guia de codificação

- Arquivos são nomeados com snake_case
- Classes são nomeadas com CamelCase e a primeira letra maiúscula
- Métodos e funções camelCase com a primeira letra minúscula e verbo como primeira palavra
- Atributos e variáveis camelCase com a primeira letra minúscula
- Usar nomes no plural para lista, array, etc
- Nome das tabelas sql snake_case minúscula no plural
- Nome das colunas das tabelas sql snake_case minúscula no singular
- Evitar o uso de valores soltos, usar constantes sempre que possível

### Observações Gerais

- As regras podem ser quebradas, mas a intenção, que é manter a organização e legibilidade, deve ser mantida
- Aberto a sugestões
