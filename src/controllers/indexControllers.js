const path = require("path");
const fs = require("fs");
const usuarioFilePath = path.join(__dirname, "../data/registro.json");
const usuario = JSON.parse(fs.readFileSync(usuarioFilePath, "utf-8"));
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require("../database/models");

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
  tickets: async (req, res) => {
    //let prueba = await db.Usuario.findAll({ include: ["entrada", "arte"] });
    //console.log(prueba);
    //res.send(prueba);
    res.render(path.join(__dirname + "../../views/tickets.ejs"));
  },
  buscarPorCampo: function (campo, texto) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((u) => u[campo] == texto);
    return userFound;
  },
  crearUsuario: async (req, res) => {
    const errors = validationResult(req);

    if (!req.body.aceptarTerminos) {
      errors.errors.push({
        type: "",
        value: "",
        msg: "Debes aceptar los terminos y condiciones",
        path: "",
        location: "",
      });
    }

    if (!req.file) {
      errors.errors.push({
        type: "",
        value: "",
        msg: "Debes subir una imagen de perfil",
        path: "",
        location: "",
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

      //Cargo usuario en db
      await db.Usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        nacimiento: req.body.nacimiento,
        clave: contrasena,
        imagen: nombreImagen
      });


      fs.writeFileSync(usuarioFilePath, JSON.stringify(usuario, null, " "));
      res.redirect("/");
    }
  },
  validarLogin: async (req, res) => {
    const errors = validationResult(req);
    let correoInput = req.body.correo;
    let contrasenaInput = req.body.contrasena;

    let usuarioValido = null;
    /*for (let i = 0; i < usuario.length; i++) {
      if (
        correoInput == usuario[i].correo &&
        bcrypt.compareSync(contrasenaInput, usuario[i].contrasena) == true
      ) {
        usuarioValido = usuario[i];
      }
    }*/

    let usuariosLista = await db.Usuario.findAll();
    for (let i = 0; i < usuariosLista.length; i++) {
      //console.log(usuariosLista[i]);
      if (
        correoInput == usuariosLista[i].correo &&
        bcrypt.compareSync(contrasenaInput, usuariosLista[i].clave) == true
      ) {
        usuarioValido = usuariosLista[i];
      }
    }

    //console.log(usuarioValido);

    if (usuarioValido) {
      req.session.userLogged = usuarioValido;
      res.redirect("/perfil");
    } else {
      errors.errors.push({
        type: "",
        value: "",
        msg: "Credenciales invalidas",
        path: "",
        location: "",
      });

      res.render("login", { errors: errors.array(), old: req.body });
    }
  },
  registro: (req, res) => {
    res.render("registro");
  },
  login: (req, res) => {
    res.render("login");
  },
  perfil: (req, res) => {
    if (req.session.userLogged) {
      res.render("perfil", {
        usuario: req.session.userLogged,
      });
    } else {
      res.redirect("/login");
    }
  },
  cerrarSesion: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },

  // APi usuario

  apiUsuario: (req, res) => {
    db.Usuario.findAll().then((Usuario) => {
      return res.status(200).json({
        data: Usuario,
        status: 200,
        total: Usuario.length
      });
    });
  },
};
module.exports = controller;

/*fileName: "./src/data/registro.json",
getData: function () {
  return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
},
buscarPorPK: function (id) {
  let allUsers = this.findAll();
  let userFound = allUsers.find((u) => u.id == id);
  return userFound;
}*/
