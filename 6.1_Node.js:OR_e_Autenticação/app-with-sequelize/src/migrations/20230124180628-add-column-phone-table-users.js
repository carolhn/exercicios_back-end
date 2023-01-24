'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'phoneNum', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phoneNum');
  }
};
// além de adicionar ou remover colunas, o objeto queryInterface também permite que você 
// altere a estrutura de uma coluna, como seu tipo, valor default, entre outros detalhes,
// assim como o ALTER TABLE também permite.
// https://sequelize.org/docs/v6/other-topics/query-interface/