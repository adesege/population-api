module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Location', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      numberOfMaleResidents: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      numberOfFemaleResidents: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      totalResidents: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      relativeLocationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Location',
          key: 'id',
          as: 'relativeLocation',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('Location');
  },
};
