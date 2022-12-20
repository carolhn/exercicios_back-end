const validateDescription = (descriptionValue, res, value) => {
    if (!descriptionValue) {
      return res.status(400).json(
        { message: `O campo ${value} é obrigatório` },
      );
    }
  };
  
  module.exports = (req, res, next) => {
    const { description } = req.body;
  
    return validateDescription(description, res, 'description')
      || validateDescription(description.createdAt, res, 'createdAt')
      || validateDescription(description.rating, res, 'rating')
      || validateDescription(description.difficulty, res, 'difficulty')
      || next();
  };

// module.exports = (req, res, next) => {
//     const { description } = req.body;          // Acesse a chave name usando req.body

//     if(!description) {                        // aplique uma condicional para verificar se o name existe.
//         return res.status(400).json(    // Se não existir, utilizamos o método status enviando o código de resposta HTTP 400
//             { message: 'O campo description é obrigatorio' },
//         );
//     }

//     if(!description.createdAt) {
//         return res.status(400).json (
//             { message: 'O campo createdAt é obrigatorio' },
//         );
//     }

//     if(!description.rating) {
//         return res.status(400).json (
//             { message: 'O campo rating é obrigatorio' },
//         );
//     }
//     if(!description.difficulty) {
//         return res.status(400).json (
//             { message: 'O campo difficulty é obrigatorio' },
//         );
//     }
//     next();
// };