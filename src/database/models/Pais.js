function mundialData(sequelize, DataTypes) {
  alias = "pais";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(50) },
    imagen: { type: DataTypes.STRING(50) },
  };

  config = { camelCase: false, timestamps: false };

  const pais = sequelize.define(alias, cols, config);

  pais.associate = function (models) {
    pais.hasMany(models.arbitro, {
      as: "arbitro",
      foreignKey: "paisFK",
    });
    pais.hasMany(models.Estadio, {
      as: "estadio",
      foreignKey: "paisFK",
    });
    pais.hasMany(models.evento, {
      as: "evento",
      foreignKey: "paisFK",
    });
    pais.hasMany(models.partido, {
      as: "partido",
      foreignKey: "localFK",
    });
    /*pais.hasMany(models.partido, {
      as: "partido",
      foreignKey: "visitanteFK",
    });*/
  };

  return pais;
}

module.exports = mundialData;
