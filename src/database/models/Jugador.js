function mundialData(sequelize, DataTypes) {
  alias = "Jugador";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255) },
    numero_camiseta: { type: DataTypes.INTEGER },
    paisFK: { type: DataTypes.INTEGER },
  };

  config = { camelCase: false, timestamps: false, freezeTableName: true, tableName: 'Jugadores' };

  const Jugador = sequelize.define(alias, cols, config);

  Jugador.associate = function (modelos) {
    Jugador.belongsTo(modelos.Pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
  };

  return Jugador;
}

module.exports = mundialData;
