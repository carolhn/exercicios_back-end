const { Course } = require('../models');

const createCourse = async ({ name, description, creationDate, active, duration }) => {
  console.log('CADASTRANDO CURSO ....');
  console.log(duration);
  return Course.create({ name, description, creationDate, active, duration }); // PRECISA RECEBER UM OBJETO
};

const getAllCourses = async () => Course.findAll();

const getCourseById = async (id) => Course.findByPk(id, { attributes: ['name', 'description'] });

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
};