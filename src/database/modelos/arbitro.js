function mundialData(sequelize, DataTypes) {
  alias = "arbitro";

  cols = {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: Datatypes.STRING(50) },
    paisFK: { type: DataTypes.INTEGER },
  };

  config = { camelCase: false, timestamps: false };

  const arbitro = sequelize.define(alias, cols, config);

  arbitro.associate = function (modelos) {
    arbitro.belongsTo(modelos.pais, {
      as: "pais",
      foreignKey: "paisFK",
    });
  };

  return arbitro;
}

module.exports = mundialData