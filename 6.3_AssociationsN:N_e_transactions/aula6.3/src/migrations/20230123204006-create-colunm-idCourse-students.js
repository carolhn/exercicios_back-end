'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'id_course', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'courses', // model esta referenciando o nome da tabela
        key: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'id_course');
  }
};
