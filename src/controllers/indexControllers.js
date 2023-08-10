const path = require("path");
const fs = require("fs");
const usuarioFilePath = path.join(__dirname, "../data/registro.json");
const usuario = JSON.parse(fs.readFileSync(usuarioFilePath, "utf-8"));
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

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
    const errors = validationResult(req);

    if (!req.body.aceptarTerminos) {
      errors.errors.push({
        type: '',
        value: '',
        msg: 'Debes aceptar los terminos y condiciones',
        path: '',
        location: ''
      });
    }

    if (!req.file) {
      errors.errors.push({
        type: '',
        value: '',
        msg: 'Debes subir una imagen de perfil',
        path: '',
        location: ''
      });
    }

    if (!errors.isEmpty()) {
      res.render("registro", { errors: errors.array(), old: req.body });
    } else {
      let idNuevoUsuario = 0;
      if (!usuario.length) {
        idNuevoUsuario = 0;
      } else {
        idNuevoUsuario = usuario[usuario.length - 1].id + 1;
      }
      console.log(req.body);
      let contrasena = bcrypt.hashSync(req.body.contrasena, 10);
      let nombreImagen = req.file.filename;
      let nuevoUsuario = {
        id: idNuevoUsuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        nacimiento: req.body.nacimiento,
        contrasena: contrasena,
        imagen: nombreImagen,
      };
      usuario.push(nuevoUsuario);

      fs.writeFileSync(usuarioFilePath, JSON.stringify(usuario, null, " "));
      res.redirect("/");
    }
  },
  validarLogin: (req, res) => {
    const errors = validationResult(req);
    let correoInput = req.body.correo;
    let contrasenaInput = req.body.contrasena;

    let usuarioValido = null;
    for (let i = 0; i < usuario.length; i++) {
      if ((correoInput == usuario[i].correo) && ((bcrypt.compareSync(contrasenaInput, usuario[i].contrasena)) == true)) {
        usuarioValido = usuario[i];
      }
    }

    if(usuarioValido){
      console.log("Buena credencial, envio al main devuelta");
      res.render("index");
    }else{
      errors.errors.push({
        type: '',
        value: '',
        msg: 'Credenciales invalidas',
        path: '',
        location: ''
      });
      console.log("mala credencial, envio al login devuelta");
      res.render("login", { errors: errors.array(), old: req.body });
    }
  },
  registro: (req, res) => {
    res.render("registro");
  },
  login: (req, res) => {
    res.render("login");
  }

};
module.exports = controller;
