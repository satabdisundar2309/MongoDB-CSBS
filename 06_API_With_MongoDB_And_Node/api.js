const dbConnection = require('./mongodb')
const express = require('express')
const app = express();
app.use(express.json()) //This line is mandatory while getting data from postman, i.e. to get the body from the request, usually used with post method, it is an alternative of body-parser but now a days body parser in not used
const mongodb = require('mongodb') //Generally used while working with delete API method by taking _id of the items in a mongodb databse.



// All these below methods are tested in postman by copying the url after running it on a certain port
// ! get API mehod, used when the server requests an url to get get data from database via API
app.get('/',async (req,res)=>{
    // ? using the mongodb databse here inside get method
    let data = await dbConnection();
    let result  = await data.find().toArray();
    res.send(result)
})

// ! post API mehod, used when we want to add new data to the database via API, we can check it in postman
// ? Note: we can give the same url to both get and post, there is no restrictions on that.
app.post('/',async (req,res)=>{
    // ! How to send a data from postman and get that data in nodeJS?
    // postman>body>raw>json>write the data e.g. {"name":"Satabdisundar"}
    console.log((req.body))
    let data = await dbConnection();
    let results = await data.insertOne(req.body)

    res.send(results); //this will reflect on postman
    // res.send('Hello mfs');
})

// ! put API mehod, used when we want to update data in the database via API, we can check it in postman
// app.put('/',async (req,res)=>{
//     let data = await dbConnection();
//     // let result = data.updateOne({name: "note 4"},{$set:{price: req.body.price}}) //updates the price of that certain product
//     let result = data.updateOne({name: "note 4"},{$set:req.body}) //updates the whole product to the body sent by postman
//     console.log(req.body)
//     res.send(req.body);
// })
// ! If we want to do the above tasks using parameters of the url, we can do like below
app.put('/:name',async (req,res)=>{
    let data = await dbConnection();
    let result = await data.updateOne({name:req.params.name},{$set:{price:req.body.price}}) //give parameters in postman, for above route use the url will be "http://localhost:8000/note 7"
    console.log(req.body);
    res.send(req.body);
})

// ! delete API mehod, used when we want to delete data from the database via API, we can check it in postman
app.delete('/:id',async (req, res)=>{
    console.log((req.params.id))
    let data = await dbConnection();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);
})
app.listen(8000)