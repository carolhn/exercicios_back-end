'use strict';

// Podemos criar a tabela Users através da função createTable do queryInterface.
// A função createTable recebe dois parâmetros:

// O primeiro recebe uma string com o nome da tabela;
// O segundo recebe um objeto com os campos, e suas condições, da tabela.

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,       // allowNull: Define se o campo pode ou não receber um valor null;
        autoIncrement: true,    // autoIncrement: Define se o campo vai ter incremento automático;
        primaryKey: true,     // primaryKey: Define se o campo é uma chave primária;
        type: Sequelize.INTEGER // type: Define o tipo do campo, por exemplo STRING, INTEGER, DATE, etc.
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

// id: Identificador do item.
// É uma chave primária;
// Não deve ser nulo;
// Possui incremento automático;
// É do tipo Integer.

// fullName: Nome completo da pessoa usuária da aplicação.
// É do tipo String.

// email: E-mail da pessoa usuária da aplicação.
// É do tipo String.

// createdAt: Data da criação do item.
// Não deve ser nulo;
// É do tipo Date.

// updatedAt: Data da atualização do item.
// Não deve ser nulo;
// É do tipo Date.