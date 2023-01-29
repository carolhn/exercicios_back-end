require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "orm_trybe",
    "host": process.env.DB_HOST || "mysql-orm",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "orm_trybe",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}
