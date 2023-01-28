'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course_modules', {
      id_course: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'courses', // model é o nome da tabela,
          key: 'id'
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
