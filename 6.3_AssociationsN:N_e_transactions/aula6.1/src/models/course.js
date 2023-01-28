const CourseSchema = (sequelize, DataTypes) => {
  const CourseTable = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER
  }, {
    tableName: 'courses',
    underscored: true, // SERVE PARA TRANSFORMAR O CAMELCASE EM SNACKCASE
   // timestamps: false, quando nao quero trabalhar com created_at e updated_at
  });
  return CourseTable;
}

module.exports = CourseSchema;