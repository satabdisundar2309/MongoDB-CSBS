// ! Mongoose
// Mongoose in nodeJS is a mongoDB package which is advanced than mongodb package. It is different from mongodb because it gives us the option to define schemas and models and also it helps in authentications and etc...

const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/e-comm' //shows error
const url = 'mongodb://127.0.0.1/e-comm'
const main = async ()=>{
    await mongoose.connect(url)
    // defining a schema - used for validating fields in the particular database
    const productSchema = new mongoose.Schema({
        name : String,
        price: Number
    });

    //model - It connects mongodb with node js, the difference between schema and model is that schema is basically used to validate that how many and which fields will be stored in the database, where as model is used to connect mongodb with nodeJS using the schema.
    const productsModel = mongoose.model('products', productSchema)
    let data = new productsModel({name: "m13", price:1100});
    let result = await data.save();
    console.log(result)
}

main();