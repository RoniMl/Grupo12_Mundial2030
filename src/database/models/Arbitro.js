function mundialData(sequelize, DataTypes) {
  alias = "Arbitro";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255) },
    paisFK: { type: DataTypes.INTEGER },
  };

  config = { camelCase: false, timestamps: false };

  const Arbitro = sequelize.define(alias, cols, config);

  Arbitro.associate = function (modelos) {
    Arbitro.belongsTo(modelos.Pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
    Arbitro.hasMany(modelos.Partido, {
      as: "partido",
      foreignKey: "arbitroFK",
    });
  };

  return Arbitro;
}

module.exports = mundialData