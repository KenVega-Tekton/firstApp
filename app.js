const bodyParser = require("body-parser");
const cors = require("cors");
const volleyball = require("volleyball");

const express = require("express");

const ordersRouter = require("./routes/order");
//const userRouter = require("./routes/user");
const dishesRouter = require("./routes/dish");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(volleyball);

app.use("/orderApi", ordersRouter);
//app.use("/user", userRouter);
app.use("/dishApi", dishesRouter);

module.exports = app;
