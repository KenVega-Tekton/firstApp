const Order = require("../models/Order");

function getOrders(req, res) {
  Order.find()
    .then(orders => {
      res.status(200).jsonp(orders);
    })
    .catch(err => {
      console.log(err);
    });
}

function createOrder(req, res) {
  let orderNew = new Order(req.body);

  orderNew
    .save()
    .then(order => {
      res.status(200).jsonp(order);
    })
    .catch(err => {
      res.status(400).jsonp(error);
    });
}

function updateOrder(req, res) {
  Order.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { state: req.body.state } },
    { new: true }
  )
    .then(order => {
      res.status(200).jsonp(order);
      console.log("order updated: ", order);
    })
    .catch(err => {
      res.status(400).jsonp(error);
      console.log("error: ", error);
    });
}

module.exports = {
  getOrders,
  createOrder,
  updateOrder
};
