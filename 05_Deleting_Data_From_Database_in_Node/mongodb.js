const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1'
const client = new MongoClient(url)

async function dbConnection(){
    const result = await client.connect();
    const db = result.db('e-comm');
    const collection = db.collection('products');
    return collection;
}

module.exports = dbConnection;