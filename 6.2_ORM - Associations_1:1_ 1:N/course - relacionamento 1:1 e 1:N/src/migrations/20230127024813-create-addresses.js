module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: { // references.model: indica qual tabela nossa foreign key está referenciando.
          // Informa a tabela da referência da associação
          model: 'employees',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('addresses');
  },
};

// A coluna employeeId. Esses dados informam ao Sequelize que aquele campo deve ser uma _foreign key_

// references.model: indica qual tabela nossa foreign key está referenciando.
// references.key: indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key.
// onUpdate e onDelete: configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os endereços daquele usuário serão alterados ou excluídos.
// Essa migration cria uma foreign key na tabela addresses, que relaciona o campo employee_id dessa tabela ao campo id da tabela employees.