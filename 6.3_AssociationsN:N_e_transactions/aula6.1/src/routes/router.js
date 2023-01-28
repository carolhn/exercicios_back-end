const express = require('express');

const courseController = require('../controllers/course.controller');

const routers = express.Router();

// routers.get('/', (req, res) => res.status(200).json({ message: 'ok' }));
routers.post('/', courseController.createCourse);
routers.get('/', courseController.findAllCourses);
routers.get('/:id', courseController.findCourseById);

module.exports = routers;
