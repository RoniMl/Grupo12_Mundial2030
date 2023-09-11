function mundialData(sequelize, DataTypes) {
  alias = "Pais";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255) },
    imagen: { type: DataTypes.STRING(255) },
    participaciones: { type: DataTypes.INTEGER }
  };

  config = { camelCase: false, timestamps: false, freezeTableName: true, tableName: 'Paises'};

  const Pais = sequelize.define(alias, cols, config);

  Pais.associate = function (models) {
    Pais.hasMany(models.Arbitro, {
      as: "arbitro",
      foreignKey: "paisFK",
    })
    Pais.hasMany(models.Estadio, {
      as: "estadio",
      foreignKey: "paisFK",
    });
    Pais.hasMany(models.Evento, {
      as: "evento",
      foreignKey: "paisFK",
    });
    Pais.hasMany(models.Jugador, {
      as: "jugador",
      foreignKey: "paisFK",
    });
    Pais.hasMany(models.Partido, {
      as: "partidoLocal",
      foreignKey: "localFK",
    });
    Pais.hasMany(models.Partido, {
      as: "partidoVisitante",
      foreignKey: "visitanteFK",
    });
  };

  return Pais;
}

module.exports = mundialData;
