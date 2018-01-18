const mongoose = require("mongoose");
const { Schema } = mongoose;

const DishSchema = new Schema({
  dishName: {
    type: String,
    required: true
  },
  dishPrice: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("dishes", DishSchema);
