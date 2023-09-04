function mundialData(sequelize, DataTypes) {
  alias = "pais";

  cols = {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: Datatypes.STRING(50) },
    imagen: { type: DataTypes.STRING(50) },
  };

  config = { camelCase: false, timestamps: false };

  const pais = sequelize.define(alias, cols, config);

  pais.associate = function (modelos) {
    pais.hasMany(modelos.arbitro, {
      as: "arbitro",
      foreignKey: "paisFK",
    });
    pais.hasMany(modelos.estadio, {
      as: "estadio",
      foreignKey: "paisFK",
    });
    pais.hasMany(modelos.evento, {
      as: "evento",
      foreignKey: "paisFK",
    });
    pais.hasMany(modelos.local, {
      as: "partido",
      foreignKey: "localFK",
    });
    pais.hasMany(modelos.visitante, {
      as: "partido",
      foreignKey: "visitanteFK",
    });
  };

  return pais;
}

module.exports = mundialData;
