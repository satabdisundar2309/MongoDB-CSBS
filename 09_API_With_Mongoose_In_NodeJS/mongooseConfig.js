// ! In this file we only establish the connection between mongoose and the database we want to work with

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/e-comm";
mongoose.connect(url);
