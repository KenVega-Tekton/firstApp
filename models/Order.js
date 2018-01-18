const mongoose = require("mongoose");
const { Schema } = mongoose;

const Dish = require("./Dish");

const OrderSchema = new Schema({
  state: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true,
    minlength: 2
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  paymentType: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  orderDetails: [Dish.schema]
});

module.exports = mongoose.model("orders", OrderSchema);
