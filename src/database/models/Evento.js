function mundialData(sequelize, DataTypes) {
  alias = "Evento";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255) },
    fecha: { type: DataTypes.DATE },
    direccion: { type: DataTypes.STRING(255) },
    paisFK: { type: DataTypes.INTEGER },
  };

  config = { camelCase: false, timestamps: false };

  const Evento = sequelize.define(alias, cols, config);

  Evento.associate = function (modelos) {
    Evento.belongsTo(modelos.Pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
  };

  return Evento;
}

module.exports = mundialData;
