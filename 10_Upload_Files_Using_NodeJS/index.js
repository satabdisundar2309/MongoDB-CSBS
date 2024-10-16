// ! File upload API using nodeJS with "npm i multer" package

const express = require('express')
const app = express()
const multer = require('multer')


// creating a middleware function file uploading
const upload =multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"uploads")
        },
        filename: function(req,file,cb){
            cb(null,file.filename+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file")


// ?NOTE: File upload aways uses post method
app.post('/upload',upload, (req,res)=>{
    res.send("File uploaded successfully")
})

app.listen(8000);