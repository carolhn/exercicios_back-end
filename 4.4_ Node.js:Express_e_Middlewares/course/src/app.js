const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const routers = require('./routes/index');
const router = require('./routes/teamsRouter');

const app = express();

routers.use(morgan('dev'));
routers.use(express.static('/images'));
routers.use(express.json());

routers.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

routers.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;