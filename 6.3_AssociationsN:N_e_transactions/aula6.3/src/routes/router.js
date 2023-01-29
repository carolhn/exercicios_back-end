const express = require('express');
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');

const routers = express.Router();

routers.use('/course', courseRoutes);
routers.use('/students', studentRoutes);

module.exports = routers;