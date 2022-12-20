const express = require("express");
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const app = express();

app.use(express.json()); //interpretar os conteúdos JSON.


//3- Crie um endpoint POST com a rota /activities para adicionar novas atividades. Ela deve:
app.post('/activities',validateDifficulty, validateRating, validateCreatedAt,validateDescription, validatePrice, validateName,
(_req, res) => {
res.status(201).json({ message: `atividade foi cadastrada com sucesso` })
});


module.exports = app;