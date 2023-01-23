require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};

// Usuário de acesso ao banco de dados;
// Senha de acesso ao banco de dados;
// Nome do banco de dados no qual queremos conectar;
// Host que estamos conectando - por ser local, utilizamos o 127.0.0.1;
// Dialect, que se refere a qual banco estamos utilizando. Nesse caso, “mysql”.