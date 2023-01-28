const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const routes = require('./routes/router');
const employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.use('/course', routes);
app.post('/employees', employee.insert);

app.use(errorMiddleware);

module.exports = app;