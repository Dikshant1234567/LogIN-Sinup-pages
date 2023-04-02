const mongoose = require("mongoose");
require("./db");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("Usersdatas", userSchema);

module.exports = userModel;
