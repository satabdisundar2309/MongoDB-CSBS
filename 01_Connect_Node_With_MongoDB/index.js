// ! How to connect node with mongodb
// We have to first install the mongodb package by "npm i mongodb", then
// const xyz = require('mongodb').MongoClient; 
const {MongoClient} = require('mongodb'); //This syntax acts same as the above syntax

// const url = 'mongodb://localhost:27017' //! This url show error for my laptop
const url = 'mongodb://127.0.0.1' //? But this url works for my laptop
// the above line is the path of mongodb, here our path is in local server i.e. localhost. We can give the online path of mongodb as well like Mongodb Atlas's path

// Now we have to pass this url in mongoClient so that we can tell our nodejs that from where we are fetching the data or response. like below syntax
const client = new MongoClient(url);

async function getData (){
    let result = await client.connect(); //this returns a promise
    let db = result.db('e-comm'); //telling node to connect with 'e-comm' database in our localhost
    let collection = db.collection('products'); //telling node to connect with 'products' collections of 'e-comm' database in our localhost
    let response = await collection.find({}).toArray(); //handling the promose
    console.log(response)
    
}

getData();

