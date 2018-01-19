const Dish = require("../models/Dish");

function getDishes(req, res) {
  Dish.find()
    .then(dishes => {
      res.status(200).jsonp(dishes);
    })
    .catch(err => {
      res.status(400).jsonp(err);
    });
}

function addDish(req, res) {
  const newDish = new Dish(req.body);
  /*new Dish({
    dishName: req.body.dishName,
    dishPrice: req.body.dishPrice
  });*/

  newDish
    .save()
    .then(dish => {
      res.status(200).jsonp(dish);
    })
    .catch(err => {
      res.status(400).jsonp(err);
    });
}

module.exports = {
  getDishes,
  addDish
};
