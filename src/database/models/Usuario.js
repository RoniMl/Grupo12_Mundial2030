function mundialData(sequelize, DataTypes) {
  alias = "usuario";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255) },
    correo: { type: DataTypes.STRING(255) },
    clave: { type: DataTypes.STRING(255) },
    telefono: { type: DataTypes.STRING(255) },
    apellido: { type: DataTypes.STRING(255) },
    imagen: { type: DataTypes.STRING(255) },
    nacimiento: { type: DataTypes.DATE() },
  };

  config = { camelCase: false, timestamps: false };

  const usuario = sequelize.define(alias, cols, config);

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
