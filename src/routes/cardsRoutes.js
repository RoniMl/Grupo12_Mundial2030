const cardsControllers = require("./../controllers/cardsControllers")
const express = require("express");
const router = express.Router();

router.get("/arte",cardsControllers.arte);
router.get("/arte/compartir", cardsControllers.subirArt);
router.post("/arte/compartir",cardsControllers.compartir);


module.exports = router;