const controller = require("./../controllers/indexControllers")

const express = require("express");
const route = express.Router();

route.get("/", controller);

module.exports = route;
