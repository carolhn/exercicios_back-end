const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials'); //token
const app = express();
require('express-async-errors'); // tratamento de erros


let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());
app.use(apiCredentials);  // token



  app.get('/teams', (req, res) => res.json(teams));

  app.get("/teams/:id", existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    res.json(team);
  });

  app.post('/teams', validateTeam, (req, res) => {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  });
  
  app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    res.json(team);
  });

  app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
  });

module.exports = app;