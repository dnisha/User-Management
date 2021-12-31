const express = require("express");
const route = express.Router();

const services = require("../services/render");
const Controller = require("../controller/controller");

//Root route
route.get("/", services.homeRoutes);

route.get("/add-user", services.add_user);

route.get("/update-user", services.update_user);

//API
route.post("/api/users", Controller.create);
route.get("/api/users", Controller.find);
route.put("/api/users/:_id", Controller.update);
route.delete("/api/users/:_id", Controller.delete);

module.exports = route;
