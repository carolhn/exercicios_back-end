const StudentSchema = (sequelize, DataTypes) => {
  const StudentTable = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    idCourse: DataTypes.INTEGER
  },
    {
      tableName: 'students',
      underscored: true,
      timestamps: false,
    },
  );

  StudentTable.associate = (models) => {
    StudentTable.belongsTo(models.Course, {
      as: 'course',
      foreignKey: 'id_course'
    });
  }

  return StudentTable;
};

module.exports = StudentSchema;