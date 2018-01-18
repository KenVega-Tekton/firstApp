const express = require("express");

const orderController = require("../controllers/orders");

const orderRouter = express.Router();

orderRouter.route("/getOrders").get(orderController.getOrders);

module.exports = orderRouter;
