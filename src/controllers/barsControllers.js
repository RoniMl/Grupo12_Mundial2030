const path = require("path");
const fs = require("fs");
const db = require("../database/models");

const barsControllers = {
  equipos: function (req, res) {
    db.Pais.findAll().then(function (equipos) {
      res.render("equipos", { equipos: equipos });
    });
  },
  estadios: function (req, res) {
    db.Estadio.findAll().then(function (estadios) {
      res.render("estadios", { estadios: estadios });
    });
  },
  jugadores: function (req, res) {
    db.Jugador.findAll({
      where: { paisFK: req.params.id },
      include: [{ association: "pais" }],
    }).then(function (jugadores) {
      res.render("jugadores", { jugadores: jugadores });
    });
  },
  valores: (req, res) => {
    res.render(path.join(__dirname + "../../views/valores.ejs"));
  }

};

module.exports = barsControllers;
