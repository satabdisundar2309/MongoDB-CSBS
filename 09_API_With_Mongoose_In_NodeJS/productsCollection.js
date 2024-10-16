// ! In this file we define the schemas for a certain collection(products here) and also define the model for it and export the model.

const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

const productModel = mongoose.model('products',productSchema);
module.exports = productModel;