const controller = require("./../controllers/indexControllers")

const express = require("express");
const route = express.Router();

route.get("/", controller.index);
route.get("/fanaticos", controller.fanaticos);
route.get("/tickets", controller.tickets);

module.exports = route;
