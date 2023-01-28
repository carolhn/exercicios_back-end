const { Student, Course } = require('../models');

const getAll = async () => { // Eager Loading (Ansioso)
  const studentWithCourse = await Student.findAll({
    attributes: ['name', ['email', 'studentEmail']],
    include: { model: Course, as: 'course' },
  });

  // Fabiano De Souza
  return studentWithCourse
}

const createStudent = async ({ name, email, active, idCourse }) =>
  await Student.create({ name, email, active, idCourse });

module.exports = {
  getAll,
  createStudent
}