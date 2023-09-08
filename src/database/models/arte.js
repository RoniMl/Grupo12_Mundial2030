function mundialData(sequelize, DataTypes) {
    alias = "arte";
  
    cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: DataTypes.STRING(50) },
      imagen: { type: DataTypes.STRING(50) },
      usuarioFK: { type: DataTypes.INTEGER },
    };
  
    config = { camelCase: false, timestamps: false };
  
    const arte = sequelize.define(alias, cols, config);
  
    arte.associate = function (modelos) {
      arte.belongsTo(modelos.usuario, {
        as: "usuario",
        foreignKey: "usuarioFK",
      });
    };
  
    return arte;
  }
  
  module.exports = mundialData