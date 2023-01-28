module.exports = (sequelize, _DataTypes) => {
    const UserBook = sequelize.define('UserBook',
      {},
      {
        timestamps: false,
        underscored: true,
        tableName: 'users_books',
      },
    );
  
    UserBook.associate = (models) => {
        models.Book.belongsToMany(models.User, {
          as: 'users',
          through: UserBook,    //  through como tabela de associação
          foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
          otherKey: 'userId', // se refere a outra chave de `users_books`
        });

        // O belongsToMany. Esse relacionamento cria um relacionamento do tipo N:N
        models.User.belongsToMany(models.Book, {
          as: 'books',
          through: UserBook,    //  through como tabela de associação
          foreignKey: 'userId', // se refere ao id de User na tabela de `users_books`
          otherKey: 'bookId',
        });
      };

      //  foreignKey sempre se refere ao model em que chamamos belongsToMany, enquanto otherKey
      // se refere ao model com o qual estamos criando a associação.

    return UserBook;
  };