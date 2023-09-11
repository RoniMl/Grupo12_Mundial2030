const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const db = require("../database/models");


const barsControllers = {
    equipos: (req, res) => {
      res.render(path.join(__dirname + "../../views/equipos.ejs"));
    },
    estadios: (req, res) => {
      res.render(path.join(__dirname + "../../views/estadios.ejs"));
    },
    jugadores: (req, res) => {
      res.render(path.join(__dirname + "../../views/jugadores.ejs"));
    },
    partidos: (req, res) => {
      res.render(path.join(__dirname + "../../views/partidos.ejs"));
    },
    jugadorVista: (req, res) => {
      
      db.jugador.findAll({include: [{association: 'pais'}]})
      .then((Estadio) =>{
          
          let listaEstadio=[];
      
          for (Estadio of Estadio){
  
              let listaActores=[];
  
              for (actor of Estadio.actores){
                  listaActores.push(actor.first_name + ' ' + actor.last_name);
              }
  
              
              listaEstadio.push(objaux);
              
          }
  
  
          res.render('Estadio',{AllEstadio: listaEstadio});
  
      });
      
  
  },
  };
  
  module.exports = barsControllers;
  