const routes = require('express').Router();
const studentController = require('../controllers/student.controller');

routes.get('/', studentController.getAllStudents);
routes.post('/', studentController.createStudent);

module.exports = routes;