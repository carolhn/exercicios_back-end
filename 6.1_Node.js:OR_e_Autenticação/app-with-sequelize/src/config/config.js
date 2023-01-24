require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,

};
// DotEnv é um pacote npm leve que carrega automaticamente variáveis ​​de ambiente de um .envarquivo para o process.envobjeto.

// Usuário de acesso ao banco de dados;
// Senha de acesso ao banco de dados;
// Nome do banco de dados no qual queremos conectar;
// Host que estamos conectando - por ser local, utilizamos o 127.0.0.1;
// Dialect, que se refere a qual banco estamos utilizando. Nesse caso, “mysql”.

// config: contém um arquivo de configuração, com orientações para o CLI se conectar com o nosso banco de dados;

module.exports = {
  development: config,
  test: config,
  production: config,
};