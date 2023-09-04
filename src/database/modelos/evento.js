function mundialData(sequelize, DataTypes) {
  alias = "evento";

  cols = {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    fecha: { type: DataTypes.DATE },
    direccion: { type: Datatypes.STRING(50) },
    imagen: { type: Datatypes.STRING(50) },
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
