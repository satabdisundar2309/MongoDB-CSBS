
const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1'
const client = new MongoClient(url);

async function dbConnection (){
    let result = await client.connect();
    let db = result.db('e-comm');
    return db.collection('products');   
}

module.exports = dbConnection;