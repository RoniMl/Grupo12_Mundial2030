const controller = require("../../controllers/anfitrionesControllers");

const express = require("express");
const controllerAnfitriones = require("../controllers/anfitrionesControllers");
const router = express.Router();

router.get("/argentina", controllerAnfitriones.argentina);
router.get("/uruguay", controllerAnfitriones.uruguay);
router.get("/paraguay", controllerAnfitriones.paraguay);
router.get("/chile", controllerAnfitriones.chile);

module.exports = router;
