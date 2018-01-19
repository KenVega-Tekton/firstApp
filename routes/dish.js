const express = require("express");

const dishController = require("../controllers/dishes");

const dishRouter = express.Router();

dishRouter.route("/getDishes").get(dishController.getDishes);
dishRouter.route("/addDish").post(dishController.addDish);

module.exports = dishRouter;
