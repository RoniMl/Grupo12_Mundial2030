const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/subir-art.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const cardsControllers = {
  subirArt: (req, res) => {
    res.render(path.join(__dirname + "../../views/subir-art.ejs"));
  },
  compartir: (req, res) => {
    let idNuevoProducto = products[products.length - 1].id + 1;
    let nuevoArte = {
      id: idNuevoProducto,
      autor: req.body.autor,
      obra: req.body.obra,
      descripcion: req.body.descripcion,
      origen: req.body.origen,
    };
    products.push(nuevoArte)

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/");

  },
};

module.exports = cardsControllers;
