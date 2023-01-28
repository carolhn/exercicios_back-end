'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('modules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      duration: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      qt_block: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('modules', {
    });
  }
};
