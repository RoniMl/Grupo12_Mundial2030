const barscontrollers = require("./../controllers/barsControllers")
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {check} = require("express-validator");


router.get("/equipos",barscontrollers.equipos);
router.get("/estadios",barscontrollers.estadios);
router.get("/valores",barscontrollers.valores);
router.get("/jugadores/:id",barscontrollers.jugadores);

module.exports = router;