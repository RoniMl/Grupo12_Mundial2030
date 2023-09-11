function mundialData(sequelize, DataTypes) {
  alias = "Fase";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255) },
  };

  config = { camelCase: false, timestamps: false };

  const Fase = sequelize.define(alias, cols, config);

  Fase.associate = function (modelos) {
    Fase.hasMany(modelos.Partido, {
      as: "partido",
      foreignKey: "FaseFK",
    });
  };

  return Fase;
}

module.exports = mundialData;
