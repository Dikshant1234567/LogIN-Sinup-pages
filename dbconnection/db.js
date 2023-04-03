const mongoose = require("mongoose");
const ConnectionUrl = "mongodb+srv://Dikshant:dikshant@cluster0.0dw6hb1.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(ConnectionUrl)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));
