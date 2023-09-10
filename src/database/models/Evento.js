function mundialData(sequelize, DataTypes) {
  alias = "evento";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fecha: { type: DataTypes.DATE },
    direccion: { type: DataTypes.STRING(50) },
    imagen: { type: DataTypes.STRING(50) },
    paisFK: { type: DataTypes.INTEGER },
  };

  config = { camelCase: false, timestamps: false };

  const evento = sequelize.define(alias, cols, config);

  evento.associate = function (modelos) {
    evento.belongsTo(modelos.pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
  };

  return evento;
}

module.exports = mundialData;
