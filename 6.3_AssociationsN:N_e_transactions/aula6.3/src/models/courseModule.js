const CourseModuleSchema = (sequelize, DataTypes) => {
  const CourseModuleTable = sequelize.define(
    'CourseModule',
    {},
    {
      timestamps: false,
      tableName: "course_modules",
      underscored: true
    });

  CourseModuleTable.associate = ({ Course, Module }) => {
    Course.belongsToMany(Module, {
      as: 'modules',
      // a FK sempre sera o model da esquerda
      foreignKey: 'id_course',
      otherKey: 'id_module',
      through: CourseModuleTable
    });

    Module.belongsToMany(Course, {
      as: 'courses',
      // a FK sempre sera o model da esquerda
      foreignKey: 'id_module',
      otherKey: 'id_course',
      through: CourseModuleTable
    });
  }

  return CourseModuleTable;
}

module.exports = CourseModuleSchema;