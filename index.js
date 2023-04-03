const mongoose = require("mongoose");
const express = require("express");
const User = require("./dbconnection/model");
const cors = require("cors");

const app = express();
const Port = process.env.PORT || 2222

// MOST IMPORTANT ROUTE
app.use(express.json());
app.use(cors());

// SINUP API
app.post("/sinup", async (req, resp) => {
  try {
    let result = User(req.body);
    result = await result.save();
    return resp.status(200).json(result);
  } catch (error) {
    return resp.status(500).json(error);
  }
});

// login api
app.post("/login", async (req, resp) => {
  try {
    let result = await User.findOne({
      email :req.body.email,
      password : req.body.password
    });
    if (result) {
      return resp.status(200).json(result);
    } else {
      return resp.status(500).json("Data did not match");
    }
  } catch (error) {
    return resp.status(500).json(error);
  }
});

app.listen(Port);
