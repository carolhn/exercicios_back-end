const CourseModuleSchema = (sequelize, DataTypes) => {
  const CourseModuleTable = sequelize.define('CourseModule',
   {}, // nao importa o tipo de dado, esse tipo tabela de relacionamento serve para pegar informações do ids
    {
      timestamps: false,
      tableName: "course_modules",
      underscored: true // came para snack case
    });

  CourseModuleTable.associate = ({ Course, Module }) => {
    Course.belongsToMany(Module, {  //a quem o curse pertence? ao module
      as: 'modules',
      foreignKey: 'id_course',   // a FK sempre sera o model da esquerda
      otherKey: 'id_module',
      through: CourseModuleTable  //atraves de: acontece o relacionamento entre as tabelas
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