const { INTEGER } = require("sequelize");

function mundialData(sequelize, DataTypes) {
    alias = "partido";
  
    cols = {
      id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
      fecha: { type: Datatypes.DATE },
      numero_partido: { type: Datatypes.INTEGER},
      anotacion_local: { type: Datatypes.INTEGER},
      anotacion_visitante: { type: Datatypes.INTEGER},
      estadioFK: {type: DataTypes.INTEGER},
      faseFK: {type: DataTypes.INTEGER},
      localFK: {type: DataTypes.INTEGER},
      visitanteFK: {type: DataTypes.INTEGER},
      arbitroFK: {type: DataTypes.INTEGER}
    };
  
    config = { camelCase: false, timestamps: false };
  
    const partido = sequelize.define(alias, cols, config);
  
    partido.associate = function (modelos) {
      partido.hasMany(modelos.partido, {
        as: "partido",
        foreignKey: "partidoFK",
      });
      partido.belongsTo(modelos.fase, {
        as: "fase",
        foreignKey: "faseFK",
      });
      partido.belongsTo(modelos.pais, {
        as: "local",
        foreignKey: "localFK",
      });
      partido.belongsTo(modelos.pais, {
        as: "visitante",
        foreignKey: "visitanteFK",
      });
      partido.belongsTo(modelos.arbitro, {
        as: "arbitro",
        foreignKey: "arbitroFK",
      });
      
      
    };
  
    return partido; 
  }
  
  module.exports = mundialData;
  