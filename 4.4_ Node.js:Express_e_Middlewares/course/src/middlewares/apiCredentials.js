const fs = require('fs/promises');


module.exports = async function apiCredentials(req, res, next) {    // como vamos ler arquivos assincronamente, precisamos do async

  const token = req.header('X-API-TOKEN');                          // pega o token do cabeçalho, se houver

  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });   // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)

  const authorized = JSON.parse(authdata);  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela

  if (token in authorized) {
    next();                          // pode continuar
  } else {
    res.sendStatus(401);            // não autorizado
  }
};