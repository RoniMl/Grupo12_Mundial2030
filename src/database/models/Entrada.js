function mundialData(sequelize, DataTypes) {
  alias = "Entrada";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codigo: { type: DataTypes.STRING(255) },
    numero_asiento: { type: DataTypes.INTEGER },
    partidoFK: { type: DataTypes.INTEGER },
    usuarioFK: { type: DataTypes.INTEGER }
  };

  config = { camelCase: false, timestamps: false };

  const Entrada = sequelize.define(alias, cols, config);

  Entrada.associate = function (modelos) {
    Entrada.belongsTo(modelos.Partido, {
      as: "partido",
      foreignKey: "partidoFK",
    });
    Entrada.belongsTo(modelos.Usuario, {
      as: "usuario",
      foreignKey: "usuarioFK",
    });
  };

  return Entrada;
}

module.exports = mundialData;
