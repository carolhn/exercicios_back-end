module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'employees',
      underscored: true,
    });
  
    Employee.associate = (models) => { //onde declararemos as associações daquele model. Estamos dizendo que a tabela Employees possui um Address
     Employee.hasOne(models.Address,
   //  Employee.hasMany(models.Address,   //  -> relacionamento 1:N ===  indicando que cada employee pode possuir muitos addresses. 
        { foreignKey: 'employeeId', as: 'addresses' });
    };
  
    return Employee;
  };
// Os métodos de criação de associações que o Sequelize disponibiliza são:
// hasOne = tem um
// belongsTo  = pertencente a
// hasMany = tem varios
// belongsToMany = pertence a varios