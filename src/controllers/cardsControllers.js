const path = require("path");
const fs = require("fs");
const arteFilePath = path.join(__dirname, "../data/arte.json");
const arte = JSON.parse(fs.readFileSync(arteFilePath, "utf-8"));
const db = require("../database/models");

const cardsControllers = {
  //Subir

  subirArt: (req, res) => {
    if (req.session.userLogged) {
      res.render("compartir");
    } else {
      res.redirect("/login");
    }
  },

  compartir: async (req, res) => {
    console.log("entre al controller");
    if (req.session.userLogged) {
      console.log(req.session.userLogged);
      let idNuevoProducto = 0;
      if (!arte.length) {
        idNuevoProducto = 0;
      } else {
        idNuevoProducto = arte[arte.length - 1].id + 1;
      }
      if (
        !req.file ||
        !req.body.autor ||
        !req.body.obra ||
        !req.body.descripcion ||
        !req.body.origen ||
        !req.body.categoria
      ) {
        res.redirect("/cards/arte/compartir");
      } else {
        let nombreImagen = req.file.filename;

        let nuevoArte = {
          id: idNuevoProducto,
          autor: req.body.autor,
          obra: req.body.obra,
          descripcion: req.body.descripcion,
          origen: req.body.origen,
          categoria: req.body.categoria,
          imagen: nombreImagen,
          usuarioFK: req.session.userLogged.id,
        };
        arte.push(nuevoArte);

        await db.Arte.create({
          nombre: req.body.obra,
          imagen: nombreImagen,
          usuarioFK: req.session.userLogged.id,
        });

        fs.writeFileSync(arteFilePath, JSON.stringify(arte, null, " "));
        res.redirect("/cards/arte");
      }
    } else {
      res.redirect("/login");
    }
  },

  // Vista Feed
  arte: (req, res) => {
    res.render("arte", { arte: arte});
  },

  //Editar o borrar vista
  editarVista: (req, res) => {
    let idArte = req.params.idArte;
    let arteBuscado;

    for (let obj of arte) {
      if (obj.id == idArte) {
        arteBuscado = obj;
        break;
      }
    }
    console.log("ENTRE A ANTES DE EDITAR")
    res.render("editar", { arteEnEdicion: arteBuscado });
  },
  editarArte: async (req, res) => {
    console.log("ENTRE A EDITARARTE")
    let idArte = req.params.idArte;

    if (
      !req.body.autor ||
      !req.body.obra ||
      !req.body.descripcion ||
      !req.body.origen ||
      !req.body.categoria
    ) {
      res.redirect("/cards/arte/compartir");
    } else {
      for (let obj of arte) {
        if (obj.id == idArte) {
          obj.autor = req.body.autor;
          obj.obra = req.body.obra;
          obj.descripcion = req.body.descripcion;
          obj.categoria = req.body.categoria;
          obj.origen = req.body.origen;
          break;
        }
      }
      

      await db.Arte.update({
        nombre: req.body.obra,
      },{
        where: {id: idArte}});
      fs.writeFileSync(arteFilePath, JSON.stringify(arte, null, " "));
      res.redirect("/cards/arte");
    }
  },

  //Borrar

  destroy: (req, res) => {
    let idArte = req.params.idArte;

    let nuevoArregloarte = arte.filter(function (e) {
      return e.id != idArte;
    });

    fs.writeFileSync(arteFilePath, JSON.stringify(nuevoArregloarte, null, ""));
    res.redirect("/cards/arte");
  },

  // Detalles

  detalles: (req, res) => {
    let idArte = req.params.idArte;
    let arteBuscado;

    for (let obj of arte) {
      if (obj.id == idArte) {
        arteBuscado = obj;
        break;
      }
    }

    res.render("detalles", { arte: arteBuscado });
  },
  // API traer informacion de arte

  apiArte: (req, res) => {
    db.Arte.findAll().then((Arte) => {
      return res.status(200).json({
        data: Arte,
        status: 200,
        total: Arte.length
         
      });
    });
  },
};

module.exports = cardsControllers;
