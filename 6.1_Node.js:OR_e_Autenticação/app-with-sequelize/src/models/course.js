const { DataTypes } = require("sequelize");

const CourseSchema = (sequelize, DataTypes) => {
 const CourseTable = sequelize.define('Course', {
   name: DataTypes.STRING,
   description: DataTypes.STRING,
   creation_date: DataTypes.DATE,
   active: DataTypes.BOOLEAN
 }, 
 {
   tableName: 'courses',
   underscored: true
 })
 return CourseTable;
}

module.exports = CourseSchema;