const bodyParser = require("body-parser");
const cors = require("cors");
const volleyball = require("volleyball");

const express = require("express");

const api = require("./routes/api");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(volleyball);

app.use("/api", api);

module.exports = app;
