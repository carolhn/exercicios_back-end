module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'password', {
      allowNull: false,
      type: Sequelize.STRING,
      after: 'email',
      defaultValue: 'invalid_pass'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'password')
  }
};