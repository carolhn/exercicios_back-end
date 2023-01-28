'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});

    await queryInterface.bulkInsert('students',
      [
        {
          name: 'Fabiano De Souza',
          email: 'fabianoVidaLoka123@betrybe.com',
          active: true,
          id_course: 1,
        },
        {
          name: 'Léo Prado',
          email: 'LeoPaoComManteiga@betrybe.com',
          active: true,
          id_course: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
