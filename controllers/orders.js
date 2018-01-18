const Order = require("../models/Order");

function getOrders(req, res) {
  Order.find()
    .then(orders => {
      console.log(orders);
      res.send("ordenes encontradas");
    })
    .catch(err => console.log(err));
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
    { _id: req.body.id },
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
  //otherFunctions separated with commas
};
