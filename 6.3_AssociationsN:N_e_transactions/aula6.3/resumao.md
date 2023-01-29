0. Subir um banco de dados 

1. Configurar o sequelize
  - .sequelizerc
  - npx sequelize init
  - alterar index.js das models (index.json -> index.js)
  - config.json -> config.js
  - .env

2. definir seu banco de dados
  - quais tabelas
  - colunas e etc
  - relacionamentos

3. criação das tabelas
  - criar migration pra cada tabela - incluindo as intermediarias
  - criar a model que representa essa tabela
  - cria um seed pra popular essas tabelas

4. definir suas rotas seus endpoints
  - cria o seu service, que é quem consome sua model (SEQUELIZE)
  - cria os controller que chama suas services