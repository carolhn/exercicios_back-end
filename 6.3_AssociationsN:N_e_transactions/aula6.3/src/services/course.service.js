const { Course, Module, Student } = require('../models');

const createCourse = async ({ name, description, creationDate, active, duration }) => {
  return Course.create({ name, description, creationDate, active, duration });
}



const getCourses = async () => Course.findAll({
  where: { id: 3 },
  include: [
    { model: Module, as: 'modules' },
    { model: Student, as: 'students' }
  ]
});

const updateCourse = async (id, { name, description, creationDate, active, duration }) => {
  const [qtdUpdated] = await Course.update(
    { name, description, creationDate, active, duration },
    { where: { id } },
  );

  return qtdUpdated > 0;
};

const removeCourse = async (id) => {
  const qtdRemoved = await Course.destroy({ where: { id } });

  return qtdRemoved > 0;
};

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  removeCourse,
};