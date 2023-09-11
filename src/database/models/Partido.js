const { INTEGER } = require("sequelize");

function mundialData(sequelize, DataTypes) {
  alias = "Partido";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fecha: { type: DataTypes.DATE },
    numero_partido: { type: DataTypes.INTEGER },
    estadioFK: { type: DataTypes.INTEGER },
    faseFK: { type: DataTypes.INTEGER },
    localFK: { type: DataTypes.INTEGER },
    visitanteFK: { type: DataTypes.INTEGER },
    arbitroFK: { type: DataTypes.INTEGER },
    anotacion_local: { type: DataTypes.INTEGER },
    anotacion_visitante: { type: DataTypes.INTEGER },
  };

  config = { camelCase: false, timestamps: false };

  const Partido = sequelize.define(alias, cols, config);

  Partido.associate = function (modelos) {
    Partido.hasMany(modelos.Entrada, {
      as: "entrada",
      foreignKey: "partidoFK",
    });
    Partido.belongsTo(modelos.Fase, {
      as: "fase",
      foreignKey: "faseFK",
    });
    Partido.belongsTo(modelos.Pais, {
      as: "paisLocal",
      foreignKey: "localFK",
    });
    Partido.belongsTo(modelos.Pais, {
      as: "paisVisitante",
      foreignKey: "visitanteFK",
    });
    Partido.belongsTo(modelos.Arbitro, {
      as: "arbitro",
      foreignKey: "arbitroFK",
    });
  };

  return Partido;
}

module.exports = mundialData;
