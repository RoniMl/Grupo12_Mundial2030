const controllers = require("./../controllers/indexControllers")
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {check} = require("express-validator");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img/avatars"));
  },
  filename: function (req, file, cb) {
    let imageName = Date.now() + file.originalname;
    cb(null, imageName);
  },
});
const uploadFile = multer({ storage: storage });

const validaciones = [
  check("nombre").notEmpty().withMessage("Falta completar el campo Nombre"),
  check("apellido").notEmpty().withMessage("Falta completar el campo Apellido"),
  check("telefono").notEmpty().withMessage("Falta completar el campo Telefono"),
  check("contrasena").notEmpty().withMessage("Falta completar el campo Constraseña"),
  check("nacimiento").notEmpty().withMessage("Debe ingresar una fecha de nacimiento valida"),
  check("contrasena").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")

]

router.get("/", controllers.index);
router.get("/fanaticos", controllers.fanaticos);
router.get("/tickets", controllers.tickets);
router.get('/loginRegistro', controllers.loginRegistro)

//Guardar nuevo Usuario

router.get("/registro", controllers.registro);
router.post("/registro", uploadFile.single("imagen"), validaciones,controllers.crearUsuario);
router.get("/login", controllers.login);
router.post("/login", controllers.validarLogin)


module.exports = router;

