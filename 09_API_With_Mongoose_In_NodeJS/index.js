const express = require("express");
const app = express();
app.use(express.json()); //used to parse the body
const mongodb = require('mongodb')

// requiring the database connection from "mongooseConfig.js" file, and yes we need not to store that in a variable, we can ndirectly require it like below
require('./mongooseConfig');

// requiring the model exported from "productsCollection.js" file, we need not to require the schema from that file because the model carries schema along with it.
const productModel = require('./productsCollection');

// ! POST API method
app.post('/create',async (req,res)=>{
    let data = new productModel(req.body);
    let result = await data.save();
    console.log(req.body)
    res.send(result);
});

// ! GET API method
app.get('/list',async (req,res)=>{
    let result = await productModel.find({})
    console.log(result)
    res.send(result);
});

// ! DELETE API method
// app.delete('/delete/:id',async (req,res)=>{
//     let result = await productModel.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
//     console.log(result)
//     res.send(result);
// });

// alternative syntax
app.delete('/delete/:_id',async (req,res)=>{
    let result = await productModel.deleteOne(req.params)
    console.log(req.params)
    res.send(result);
});

// ! PUT API method
app.put('/update/:name',async (req,res)=>{
    let result = await productModel.updateOne({name: req.params.name},{$set:{name: req.body.name, price: req.body.price}});
    console.log(result)
    res.send(result);
});

// ! Search API (like google search)
app.get('/search/:key',async (req,res)=>{
    let data = await productModel.find({
        $or:[{name:{$regex:req.params.key}},{brand:{$regex:req.params.key}}]
    })
    res.send(data)
    console.log(req.params)
})
app.listen(8000);
