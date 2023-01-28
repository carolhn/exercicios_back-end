require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT } = process.env;

const config = {
  development: {
    username: DB_USER || 'root',
    password: DB_PASSWORD || 'password',
    database: DB_NAME || 'orm_trybe',
    host: DB_HOST || 'localhost',
    port: 3306,
    dialect: DB_DIALECT || 'mysql',
  },
  test: {
    username: DB_USER || 'root',
    password: DB_PASSWORD || 'password',
    database: DB_NAME || 'orm_trybe',
    host: DB_HOST || 'localhost',
    port: 3306,
    dialect: DB_DIALECT || 'mysql',
  },
  production: {
    username: DB_USER || 'root',
    password: DB_PASSWORD || 'password',
    database: DB_NAME || 'orm_trybe',
    host: DB_HOST || 'localhost',
    port: 3306,
    dialect: DB_DIALECT || 'mysql',
  },
};

module.exports = config;
