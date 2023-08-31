function mundialData(sequelize, DataTypes) {
  alias = "usuarios";

  cols = {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: Datatypes.STRING(50) },
    email: { type: Datatypes.STRING(50) },
    clave: { type: Datatypes.STRING(50) },
  };

  config = { camelCase: false, timestamps: false };

  const usuarios = sequelize.define(alias, cols, config);

  usuario.associate = function (modelos) {
    usuario.hasMany(modelos.entrada, {
      as: "entrada",
      foreignKey: "paisFK",
    });
    usuario.hasMany(modelos.arte, {
      as: "arte",
      foreignKey: "paisFK",
    });
  };
  return usuario;
}

module.exports = mundialData;
