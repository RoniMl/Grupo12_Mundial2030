const controllers = require("./../controllers/indexControllers")
const express = require("express");
const router = express.Router();

router.get("/", controllers.index);
router.get("/fanaticos", controllers.fanaticos);
router.get("/tickets", controllers.tickets);
router.get('/loginRegistro', controllers.loginRegistro)

//Guardar nuevo Usuario

router.post(
    "/",
    controllers.crearUsuario
  );

module.exports = router;
