const express = require("express");
const methodOverride = require("method-override")

const path = require("path");


const indexRoutes = require("./routes/indexRoutes");
const anfitrionesRoutes = require("./routes/anfitrionesRoutes");
const cardsRoutes = require("./routes/cardsRoutes");
const session = require("express-session");


const app = express();
app.use(session({
  secret: "Mundial2030",
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"))
app.use("/", indexRoutes);
app.use("/anfitriones", anfitrionesRoutes);
app.use("/cards", cardsRoutes);


app.use((req,res,next)=>{
    res.send("pagina no encontrada")});

app.listen(3002, function () {
  console.log("Servidor corriendo");
});

/* app.get("/tickets", (req, res) => {
  res.sendFile(__dirname + "/views/tickets.html"); // Permite enviar texto o codigo HTML
});

app.get("/estadios", (req, res) => {
  res.sendFile(__dirname + "/views/estadios.html"); // Permite enviar texto o codigo HTML
});

app.get("/equipos", (req, res) => {
  res.sendFile(__dirname + "/views/equipos.html"); // Permite enviar texto o codigo HTML
});

app.get("/calendario", (req, res) => {
  res.sendFile(__dirname + "/views/calendario.html"); // Permite enviar texto o codigo HTML
});

app.get("/fanaticos", (req, res) => {
  res.sendFile(__dirname + "/views/fanaticos.html"); // Permite enviar texto o codigo HTML
});

app.get("/sobre-nosotros", (req, res) => {
  res.sendFile(__dirname + "/views/sobre-nosotros.html"); // Permite enviar texto o codigo HTML
});

app.get("/argentina", (req, res) => {
  res.sendFile(__dirname + "/views/argentina.html"); // Permite enviar texto o codigo HTML
});

app.get("/chile", (req, res) => {
  res.sendFile(__dirname + "/views/chile.html"); // Permite enviar texto o codigo HTML
});

app.get("/paraguay", (req, res) => {
  res.sendFile(__dirname + "/views/paraguay.html"); // Permite enviar texto o codigo HTML
});

app.get("/uruguay", (req, res) => {
  res.sendFile(__dirname + "/views/uruguay.html"); // Permite enviar texto o codigo HTML
});

app.get("/prode", (req, res) => {
  res.sendFile(__dirname + "/views/prode.html"); // Permite enviar texto o codigo HTML
});

app.get("/valores", (req, res) => {
  res.sendFile(__dirname + "/views/valores.html"); // Permite enviar texto o codigo HTML
});
 */
