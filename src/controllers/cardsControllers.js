const path = require("path");
const fs = require("fs");
const arteFilePath = path.join(__dirname, "../data/arte.json");
const arte = JSON.parse(fs.readFileSync(arteFilePath, "utf-8"));

const cardsControllers = {
  subirArt: (req, res) => {
    res.render("compartir");
  },

  compartir: (req, res) => {
    let idNuevoProducto = arte[arte.length - 1].id + 1;
    let nombreImagen = req.file.filename;
    let nuevoArte = {
      id: idNuevoProducto,
      autor: req.body.autor,
      obra: req.body.obra,
      descripcion: req.body.descripcion,
      origen: req.body.origen,
      categoria: req.body.categoria,
      imagen: nombreImagen
    };
    arte.push(nuevoArte);

    fs.writeFileSync(arteFilePath, JSON.stringify(arte, null, " "));
    res.redirect("/cards/arte");
  },
  arte: (req, res) => {
    res.render("arte", { arte: arte });
  },

  //Borrar
};

module.exports = cardsControllers;
