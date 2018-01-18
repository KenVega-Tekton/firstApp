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
  console.log(req.body);

  // let orderNew = new Order({
  //   state: "Comanda",
  //   clientName: req.body.clientName,
  //   createdAt: req.body.createdAt,
  //   paymentType: req.body.paymentType,
  //   total: req.body.total,
  //   orderDetails: req.body.orderDetails
  // });

  let orderNew = new Order(req.body);

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
