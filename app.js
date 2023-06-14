const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3002, function () {
  console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html"); // Permite enviar texto o codigo HTML
});

app.get("/tickets", (req, res) => {
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
