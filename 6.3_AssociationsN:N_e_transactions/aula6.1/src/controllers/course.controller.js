const courseService = require('../service/course.service');

const createCourse = async (req, res, _next) => {
  const newCourse = await courseService.createCourse(req.body);
  return res.status(201).json(newCourse);
};

const findAllCourses = async (req, res, _next) => {
  const allCourses = await courseService.getAllCourses();

  return res.status(200).json(allCourses);
};

const findCourseById = async (req, res, _next) => {
  const { id } = req.params;
  const course = await courseService.getCourseById(id);

  return res.status(200).json(course);
};

module.exports = {
  createCourse,
  findAllCourses,
  findCourseById,
};