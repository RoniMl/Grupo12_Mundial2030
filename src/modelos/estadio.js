function mundialData(sequelize, DataTypes) {
  alias = "estadio";

  cols = {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    paisFK: { type: DataTypes.INTEGER },
    capacidad: { type: DataTypes.INTEGER },
    nombre: { type: Datatypes.STRING(50) },
    imagen: { type: Datatypes.STRING(50) },
    direccion: { type: Datatypes.STRING(50) },
  };

  config = { camelCase: false, timestamps: false };

  const estadio = sequelize.define(alias, cols, config);

  estadio.associate = function (modelos) {
    estadio.belongsTo(modelos.pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
  };

  return estadio;
}

module.exports = mundialData;
