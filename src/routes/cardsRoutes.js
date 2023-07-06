const cardsControllers = require("./../controllers/cardsControllers")
const express = require("express");
const router = express.Router();

router.get("/comparti-tu-arte", cardsControllers.art);


module.exports = router;