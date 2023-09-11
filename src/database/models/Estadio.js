function mundialData(sequelize, DataTypes) {
  alias = "Estadio";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    paisFK: { type: DataTypes.INTEGER },
    capacidad: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING(50) },
    direccion: { type: DataTypes.STRING(255) },
    imagen: { type: DataTypes.STRING(255) },
  };

  config = { camelCase: false, timestamps: false};

  const Estadio = sequelize.define(alias, cols, config);

  Estadio.associate = function (modelos) {
    Estadio.belongsTo(modelos.Pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
  };

  return Estadio;
}

module.exports = mundialData;
