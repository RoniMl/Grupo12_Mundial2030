function mundialData(sequelize, DataTypes) {
  alias = "jugador";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(50) },
    numero_camiseta: { type: DataTypes.INTEGER },
    paisFK: { type: DataTypes.INTEGER },
  };

  config = { camelCase: false, timestamps: false };

  const jugador = sequelize.define(alias, cols, config);

  jugador.associate = function (modelos) {
    jugador.belongsTo(modelos.pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
  };

  return jugador;
}

module.exports = mundialData;
