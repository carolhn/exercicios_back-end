const studentService = require('../services/student.service');

const getAllStudents = async (req, res) => {
  const result = await studentService.getAll();
  return res.status(200).json(result);
}

const createStudent = async (req, res) => {
  const student = await studentService.createStudent(req.body);
  return res.status(201).json(student);
};

module.exports = {
  getAllStudents,
  createStudent
}