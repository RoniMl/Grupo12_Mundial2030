const path = require("path");
const fs = require("fs");
const db = require("../database/models");

const barsControllers = {
  equipos: (req, res) => {
    res.render(path.join(__dirname + "../../views/equipos.ejs"));
  },
  estadios: function (req, res) {
    db.Estadio.findAll()
    .then(function(estadios){
      res.render("estadios", {estadios:estadios})
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
