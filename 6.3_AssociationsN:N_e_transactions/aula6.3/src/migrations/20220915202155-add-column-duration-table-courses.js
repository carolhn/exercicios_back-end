'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('courses', 'duration', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'active'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'duration');
  }
};
