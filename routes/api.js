const express = require("express");

const orderController = require("../controllers/orders");
const dishController = require("../controllers/dishes");

const apiRouter = express.Router();

apiRouter
  .route("/order")
  .get(orderController.getOrders)
  .post(orderController.createOrder);

apiRouter
  .route("/order/:id")
  //.get(orderController.getOrder)
  .put(orderController.updateOrder);

apiRouter
  .route("/dish")
  .get(dishController.getDishes)
  .post(dishController.addDish);

module.exports = apiRouter;
