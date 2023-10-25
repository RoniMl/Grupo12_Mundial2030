const cardsControllers = require("./../controllers/cardsControllers");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

router.get("/arte", cardsControllers.arte);

//obtener producto

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img"));
  },
  filename: function (req, file, cb) {
    let imageName = Date.now() + file.originalname;
    cb(null, imageName);
  },
});
const uploadFile = multer({ storage: storage });

//Compartir
router.get("/arte/compartir", cardsControllers.subirArt);
router.post(
  "/arte/compartir",
  uploadFile.single("imageProduct"),
  cardsControllers.compartir
);

//Detalles

router.get("/arte/detalles/:idArte", cardsControllers.detalles);

//Editar

router.get('/arte/editar/:idArte',cardsControllers.editarVista); 
router.post('/arte/editar/:idArte',cardsControllers.editarArte); 

//Borrar

router.delete("/arte/editar/delete/:idArte",cardsControllers.destroy)

//Api

router.get("/arte/apiArte", cardsControllers.apiArte);

module.exports = router;
