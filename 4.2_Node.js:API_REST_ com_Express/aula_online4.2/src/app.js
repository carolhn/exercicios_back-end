const express = require('express');
const activities = require('./data/activities');

const app = express();

// CRIAÇÃO DOS NOSSOS ENDPOINT (OU SEJA O QUE AS PESSOAS VÃO ACESSAR)
// o app.js é responsavel por todas as routes & endpoint
// www.github.com /login

// localhost:3001/activities
// app.verp('endpoint', ('callback')=> {})
app.get('/activities', (request, response) => {
  console.log('LISTANDO TAREFAS ...');
  return response.status(200).json(activities); //.send = string / .json = arquivo
});


// cadastrar uma adividade novo no banco
app.use(express.json()); // precisa transformar o arquivo em json

app.post('/activities', (request, response) => {
  console.log('CADASTRANDO TAREFAS ...');
  const { description, status, priority } = request.body;

  const task = {
    id: activities.length + 1,
    description,
    priority,
    status,
  };

  activities.push(task);
  response.status(201).json(activities);
});


// essa rota vai listar uma tarefa pelo ID
app.get('/activities/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { page } = request.query;
    const { authorization } = request.headers;

    console.log(authorization);
    console.log(page);
    
    const task = activities.find((e) => e.id === Number(id));

    if (!task) return response.status(404).json({ message: 'Not Found' });
    return response.status(200).json(task);
  } catch (err) {
    return response.status(500).json({ message: 'Internal Server Error' });
  }
});


// Como atualizar uma informação
app.put('/activities/:id', (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;
  let alteredActivity;

  for (let i = 0; i < activities.length; i += 1) {
    const activity = activities[i];

    if (activity.id === Number(id)) {
      activity.description = description;
      activity.status = status;
      alteredActivity = activity;
    }
  }

  res.status(200).json({ alteredActivity });
});


// como deletar uma rota
app.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = activities.findIndex((team) => team.id === Number(id));
  activities.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;