const router = require('express').Router();
const courseController = require('../controllers/course.controller');

router.post('/', courseController.createCourse);
router.get('/', courseController.getCourses);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.removeCourse);

module.exports = router;