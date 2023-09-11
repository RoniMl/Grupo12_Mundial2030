function mundialData(sequelize, DataTypes) {
    alias = "Arte";
  
    cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: DataTypes.STRING(255) },
      imagen: { type: DataTypes.STRING(255) },
      usuarioFK: { type: DataTypes.INTEGER },
    };
  
    config = { camelCase: false, timestamps: false };
  
    const Arte = sequelize.define(alias, cols, config);
  
    Arte.associate = function (modelos) {
      Arte.belongsTo(modelos.Usuario, {
        as: "usuario",
        foreignKey: "usuarioFK",
      });
    };
  
    return Arte;
  }
  
  module.exports = mundialData