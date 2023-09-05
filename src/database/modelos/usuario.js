function mundialData(sequelize, DataTypes) {
  alias = "usuarios";

  cols = {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: Datatypes.STRING(255) },
    correo: { type: Datatypes.STRING(255) },
    clave: { type: Datatypes.STRING(255) },
    telefono: { type: Datatypes.STRING(255) },
    apellido: { type: Datatypes.STRING(255) },
    imagen: { type: Datatypes.STRING(255) },
    nacimiento: { type: Datatypes.DATE() },
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
