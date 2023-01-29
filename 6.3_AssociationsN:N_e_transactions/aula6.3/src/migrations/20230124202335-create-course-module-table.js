'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course_modules', {
      id_course: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'courses', // model é o nome da tabela,
          key: 'id'       //FORENKEY/ COLUNA QUE VAI FAZER A REFERENCIA
        },
        primaryKey: true,      //a tabela intyermediaria precisa de primarykey 
        onDelete: 'CASCADE',  // se algum seed for deletado/ vai deletar a linha
        onUpdate: 'CASCADE'   // se fotr alterado o id ele atualiza o numero
      },
      id_module: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'modules',
          key: 'id'
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("course_modules");
  }

};

// tabela intermediaria nao precisa de ID
// TABELA INTERMEDIARIA PRECISA REFERENCIAR UMA TABELA ONDE ESTA COLETANDO AS INFORMAÇÕES