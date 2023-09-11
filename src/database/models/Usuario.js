function mundialData(sequelize, DataTypes) {
  alias = "Usuario";

  cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nacimiento: { type: DataTypes.DATE },
    imagen: { type: DataTypes.STRING(255) },
    nombre: { type: DataTypes.STRING(255) },
    correo: { type: DataTypes.STRING(255) },
    telefono: { type: DataTypes.STRING(255) },
    clave: { type: DataTypes.STRING(255) },
    apellido: { type: DataTypes.STRING(255) },
  };

  config = { camelCase: false, timestamps: false };

  const Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (modelos) {
    Usuario.hasMany(modelos.Entrada, {
      as: "entrada",
      foreignKey: "UsuarioFK",
    });
    Usuario.hasMany(modelos.Arte, {
      as: "arte",
      foreignKey: "UsuarioFK",
    });
  };
  return Usuario;
}

module.exports = mundialData;
