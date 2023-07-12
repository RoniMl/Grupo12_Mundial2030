const cardsControllers = require("./../controllers/cardsControllers")
const express = require("express");
const router = express.Router();

router.get("/comparti-tu-arte", cardsControllers.subirArt);
router.post("/comparti-tu-arte",cardsControllers.compartir);


module.exports = router;