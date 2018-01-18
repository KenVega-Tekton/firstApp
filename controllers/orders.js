const Order = require("../models/Order");

function getOrders(req, res) {
  Order.find().then(orders => {
    console.log(orders);
    res.send("ordenes encontradas");
  });
}

module.exports = {
  getOrders
  //otherFunctions separated with commas
};
