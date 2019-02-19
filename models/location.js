module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name of the location is required',
          min: 2,
        },
      },
    },
    totalResidents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'total number of residents is required',
        },
      },
    },
    numberOfMaleResidents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'number of male residents required',
        },
      },
    },
    relativeLocationId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      as: 'relative',
    },
    numberOfFemaleResidents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Number female residents is required',
        },
      },
    },
  }, {
    freezeTableName: true,
  });

  Location.associate = (models) => {
    Location.hasMany(
      models.Location,
      { as: 'relativeLocation', foreignKey: 'relativeLocationId' },
      { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
    );
  };
  return Location;
};
