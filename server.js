const mongoose = require("mongoose");

const app = require("./app.js");
const config = require("./config");

mongoose.Promise = global.Promise;

mongoose
  .connect(config.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB : ", error);
  });

app.listen(config.PORT, () => {
  console.log(`Server running at http://localhost:${config.PORT}`);
});

module.exports = { server: app };
