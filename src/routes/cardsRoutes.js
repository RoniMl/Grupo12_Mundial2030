const cardsControllers = require("./../controllers/cardsControllers")
const express = require("express");
const router = express.Router();

router.get("/arte",cardsControllers.arte);

//Comparir
router.get("/arte/compartir", cardsControllers.subirArt);
router.post("/arte/compartir",cardsControllers.compartir);

//Detalles



//Editar

//Borrar
router.delete('/borrar/:idArte', cardsControllers.destroy); 



module.exports = router;