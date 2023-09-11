const controllers = require("./../controllers/indexControllers")
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {check} = require("express-validator");


router.get("/equipos",controllers.equipos);
router.get("/estadios",controllers.estadios);
router.get("/partidos",controllers.partidos);
router.get("/jugadores",controllers.jugadores);

module.exports = router;