const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNum: DataTypes.STRING,
    });
  
    return User;
  };
  
  module.exports = UserModel;

// o nome do model é no singular e o nome da tabela é no plural