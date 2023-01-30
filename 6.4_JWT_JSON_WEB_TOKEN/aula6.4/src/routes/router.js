const express = require('express');
const router = require('./courseRoutes');
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');
const authController = require('../controllers/auth.controller');
const routers = express.Router();

routers.use('/course', courseRoutes);
routers.use('/students', studentRoutes);
routers.post('/login', authController.auth);

module.exports = routers;