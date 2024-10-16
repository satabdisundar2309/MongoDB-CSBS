const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/e-comm";
mongoose.connect(url);
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

// ! CREATE/INSERT in mongoose - save()
// const saveInDB = async ()=>{
//     const productModel = mongoose.model('products',productSchema);
//     let data = new productModel({name:"F 15",brand:"mi",price:4200,category:"mobile"})
//     let result = await data.save();
//     console.log(result)
// }

// this below syntax, acts same as the above syntax

// const saveInDB = async ()=>{
//     const productModel = mongoose.model('products',productSchema);
//     let result = await new productModel({name:"F 15",brand:"mi",price:4200,category:"mobile"}).save();
//     console.log(result)
// }

// saveInDB();

// ! UPDATE in mongoose - updateOne() 
// const updateInDB = async ()=>{
//     const productModel = mongoose.model('products',productSchema);
//     let data = await productModel.updateOne({name:"F 15"},{$set:{price:5000,name:"Reno 3"}});
//     console.log(data);
// }

// updateInDB();

// ! DELETE in mongoose - deleteOne()
// const deleteFromDB = async ()=>{
//     const productModel = mongoose.model('products',productSchema);
//     let data = await productModel.deleteOne({name:"Reno 3"})
//     console.log(data)
// }

// deleteFromDB();

// ! READ/FIND in mongoose - find()
const readFromDB = async ()=>{
    const productModel = mongoose.model('products',productSchema);
    let data = await productModel.find({}); //! here you should not use toArray() function
    console.log(data)
}

readFromDB();