const express = require("express");
const methodOverride = require("method-override");
//const mysql = require("mysql2");
const session = require("express-session");
const path = require("path");
//const Sequelize = require('sequelize');
const indexRoutes = require("./routes/indexRoutes");
const anfitrionesRoutes = require("./routes/anfitrionesRoutes");
const cardsRoutes = require("./routes/cardsRoutes");
const barsRoutes = require("./routes/barsRoutes");



/*const connection = mysql.createConnection({
  host: "mysql-roni.alwaysdata.net",
  user: "roni_roni11",
  password: "grupo12mundial2030",
  database: "roni_grupo12_mundial2030",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado!");
  console.log(err);
});
*/

const app = express();
app.use(
  session({
    secret: "Mundial2030",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use((req, res, next) => {
  res.locals.usuarioLogeado = req.session.userLogged;
  next();
});

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use("/", indexRoutes);
app.use("/anfitriones", anfitrionesRoutes);
app.use("/cards", cardsRoutes);
app.use("/bars", barsRoutes)

app.use((req, res, next) => {
  res.send("pagina no encontrada");
});

app.listen(3002, function () {
  console.log("Servidor corriendo");
});

//module.exports = sequelize;
