function mundialData(sequelize, DataTypes) {
    alias = "fase";
  
    cols = {
      id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: Datatypes.STRING(50) },
    };
  
    config = { camelCase: false, timestamps: false };
  
    const fase = sequelize.define(alias, cols, config);
  
    fase.associate = function (modelos) {
        fase.hasMany(modelos.partido, {
            as: "partido",
            foreignKey: "faseFK",
          });
    };
  
    return fase;
  }
  
  module.exports = mundialData