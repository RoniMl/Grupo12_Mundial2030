function mundialData(sequelize, DataTypes) {
    alias = "entrada";
  
    cols = {
      id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
      codigo: { type: Datatypes.STRING(50) },
      numero_asiento: { type: DataTypes.INTEGER },
      partidoFK: { type: DataTypes.INTEGER },
      usuarioFK : { type: DataTypes.INTEGER },
    };
  
    config = { camelCase: false, timestamps: false };
  
    const entrada = sequelize.define(alias, cols, config);
  
    entrada.associate = function (modelos) {
      entrada.belongsTo(modelos.partido, {
        as: "partido",
        foreignKey: "partidoFK",
      });
      entrada.belongsTo(modelos.usuario, {
        as: "usuario",
        foreignKey: "usuarioFK",
      });
    };
  
    return entrada;
  }
  
  module.exports = mundialData