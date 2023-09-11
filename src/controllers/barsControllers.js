const path = require("path");
const fs = require("fs");
const db = require("../database/models");

const barsControllers = {
  equipos: (req, res) => {
    res.render(path.join(__dirname + "../../views/equipos.ejs"));
  },
  estadios: (req, res) => {
    db.Estadio.findAll({include: ["pais" ]}).then(function (estadio) {
      res.render("estadios");
      //res.render("../../views/estadios.ejs", {estadio: estadio});
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
