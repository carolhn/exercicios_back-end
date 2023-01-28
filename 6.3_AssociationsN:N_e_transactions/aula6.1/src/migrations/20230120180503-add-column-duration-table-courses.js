'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.addColumn('Courses', 'duration', {   // como adicionar uma coluna (1° parametro nome da tabela / 2° nome da coluna que vou add)
      allowNull: false,           //nao pode ser vazia
      type: Sequelize.INTEGER,   //tipo  numero inteiro
      after: 'active'           // essa coluna duration DEVE ser adicionada DEPOIS da coluna ACTIVE
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Courses', 'duration') //REMOVE COLUNA CASO DER ERRO
  }
};
