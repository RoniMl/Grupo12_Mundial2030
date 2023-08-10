const path = require("path");
const fs = require("fs");
const usuarioFilePath = path.join(__dirname, "../data/registro.json");
const usuario = JSON.parse(fs.readFileSync(usuarioFilePath, "utf-8"));
const bcrypt = require("bcrypt");
const controller = {
  index: (req, res) => {
    res.render(path.join(__dirname + "../../views/index.ejs"));
  },
  fanaticos: (req, res) => {
    res.render(path.join(__dirname + "../../views/fanaticos.ejs"));
  },
  loginRegistro: (req, res) => {
    res.render(path.join(__dirname + "../..views/loginRegistro.ejs"));
  },
  tickets: (req, res) => {
    res.render(path.join(__dirname + "../../views/tickets.ejs"));
  },
  /*fileName: "./src/data/registro.json",
  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },
  buscarPorPK: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((u) => u.id == id);
    return userFound;
  },
  buscarPorCampo: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((u) => u[field] == text);
    return userFound;
  },*/
  crearUsuario: (req, res) => {
    let idNuevoUsuario = 0;
    if (!usuario.length) {
      idNuevoUsuario = 0;
    } else {
      idNuevoUsuario = usuario[usuario.length - 1].id + 1;
    }
    let contrasena = bcrypt.hashSync(req.body.contrasena, 10);
    let nombreImagen = req.file.filename;
    let nuevoUsuario = {
      id: idNuevoUsuario,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      correo: req.body.correo,
      telefono: req.body.telefono,
      nacimiento: ConvertTo.Daytime(req.body.nacimiento),
      contrasena: contrasena,
      imagen: nombreImagen,
    };
    usuario.push(nuevousuario);

    fs.writeFileSync(usuarioFilePath, JSON.stringify(usuario, null, " "));
    res.redirect("/");
  },
  validarLogin: (req, res) => {
    let correoInput = req.body.correo;
    let contrasenaInput = req.body.contrasena;
    for (let i = 0; i < usuario.length; i++) {
      if ((correoInput == usuario.correo) && ((bcrypt.compareSync(constrasenaInput, usuario.contrasena)) == true )) {
        res.render("/")
      } else {
        res.render("El usuario o la contraseña no son correctos")
      }
      
    }
  },
};
module.exports = controller;
