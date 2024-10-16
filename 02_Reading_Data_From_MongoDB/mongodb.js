//? Now we have to create a sepatare file to keep the connection code code named mongodb.js where we are establishing a connection with particular database

const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1'
const client = new MongoClient(url);

async function dbConnection (){
    let result = await client.connect();
    let db = result.db('e-comm');
    return db.collection('products');   
} //this function returns a promise i.e. db.collection('products') 

// console.log(dbConnection()) //it returns a pending promise i.e. db.collection('products')

module.exports = dbConnection;