const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
      next(); // Chama o próximo middleware
    } else {
      res.sendStatus(400); // Ou já responde avisando que deu errado
    }
  };

// 1)Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.
    const existingId = (req, res, next) => {
    const id = Number(req.params.id);
  
    if (teams.some((t) => t.id === id)) { // se existe, a requisição segue para o próximo middleware
      next();
    } else {
      res.sendStatus(404);       // se não existe, então vamos retornar o status HTTP 404
    }
  };

module.exports = validateTeam, existingId;


// MIDDLEWARE
// 1️⃣ Faz uma validação básica que apenas confere se todas as propriedades esperadas estão presentes no req.body.
// 2️⃣ Se a validação aprovar, esse middleware endereça a requisição para o próximo middleware, que efetivamente cria o time.
// 3️⃣ Se a validação falhar, esse middleware retorna uma resposta com status 400 e nunca chama o próximo middleware. 400 é o código HTTP para Bad Request, indicando que existe algo errado na requisição. Para mais informações sobre códigos HTTP, confira a documentação no site da MDN (Mozilla Developer Network).
