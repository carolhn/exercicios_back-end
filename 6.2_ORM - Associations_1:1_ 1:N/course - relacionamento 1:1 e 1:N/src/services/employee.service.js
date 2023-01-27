const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

module.exports = { getAll };

// O campo include. Esse campo diz ao Sequelize quais serão as configurações da requisição.
// A propriedade model se refere a qual tabela será utilizada. Já a propriedade 'as' deve ser igual à
//  que declaramos no momento da criação da associação no respectivo model.