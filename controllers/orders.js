const Order = require("../models/Order");

const orderNew = new Order({
  state: "comanda",
  clientName: "John Doe",
  createdAt: 245,
  paymentType: "tarjeta",
  total: 23,
  orderDetails: [
    {
      dishName: "plato 1",
      dishPrice: 10
    },
    {
      dishName: "plato 2",
      dishPrice: 13
    }
  ]
});

function getOrders(req, res) {
  Order.find().then(orders => {
    console.log(orders);
    res.send("ordenes encontradas");
  });
}

function createOrder(req, res) {
  orderNew
    .save()
    .then(order => {
      res.status(200).jsonp(order);
      console.log(order);
    })
    .catch(err => {
      res.status(400).jsonp(error);
      console.log(err);
    });
}

module.exports = {
  getOrders,
  createOrder
  //otherFunctions separated with commas
};
