const path = require("path");
const fs = require("fs");
const db = require("../database/models");

const barsControllers = {
  equipos: (req, res) => {
    res.render(path.join(__dirname + "../../views/equipos.ejs"));
  },
  estadios: (req, res) => {
    db.Estadio.findAll().then(function (estadio) {
      res.render("../../views/estadios.ejs", {
        include: [{ association: "pais" }],
      });
    });
  },

  jugadores: (req, res) => {
    res.render(path.join(__dirname + "../../views/jugadores.ejs"));
  },
  partidos: (req, res) => {
    res.render(path.join(__dirname + "../../views/partidos.ejs"));
  },
};

module.exports = barsControllers;
