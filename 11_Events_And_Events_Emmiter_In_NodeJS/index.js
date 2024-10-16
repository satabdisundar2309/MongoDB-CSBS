// ! Events and Event emitter in nodeJS
const express = require('express')
const app = express()
const EventEmitter = require('events') //EventEmitter is basically a class in events module

// creating an object of EventEmitter class
const event = new EventEmitter();
let count = 0;
event.on("CountAPI",()=>{
    count++;
    console.log("Event called", count)
}) //capturing the "CountAPI" event


app.get('/',(req, res)=>{
    res.send("Api called")
    event.emit("CountAPI"); //emitting the "CountAPI" event
});
app.get('/search',(req, res)=>{
    res.send("Search Api called")
    event.emit("CountAPI")
});
app.get('/update',(req, res)=>{
    res.send(" Update Api called")
    event.emit("CountAPI")
});

app.listen(8000)