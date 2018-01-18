const bodyParser = require("body-parser");
const cors = require("cors");
const volleyball = require("volleyball");

const express = require("express");

const ordersRouter = require("./routes/order");
//const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(volleyball);

app.use("/order", ordersRouter);
//app.use("/user", userRouter);

module.exports = app;
