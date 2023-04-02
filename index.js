const mongoose = require("mongoose");
const express = require("express");
const User = require("./dbconnection/model");
const cors = require("cors");

const app = express();

// MOST IMPORTANT ROUTE
app.use(express.json());
app.use(cors());

// SINUP API
app.post("/sinup", async (req, resp) => {
  try {
    let result = User(req.body);
    result = await result.save();
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});

// login api
app.post("/login", async (req, resp) => {
  try {
    let result = await User.findOne(req.body);
    if (result) {
      resp.send(result);
    } else {
      resp.send("Data did not match");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(2222);
