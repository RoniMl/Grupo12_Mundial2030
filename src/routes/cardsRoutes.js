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

//Comparir
router.get("/arte/compartir", cardsControllers.subirArt);
router.post(
  "/arte/compartir",
  uploadFile.single("imageProduct"),
  cardsControllers.compartir
);

//Detalles

//Editar

//Borrar


module.exports = router;
