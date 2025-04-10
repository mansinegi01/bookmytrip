const express = require('express')
const app = express();
const path = require('path')

//import files
const {connectionDB} = require('./connection')

//MongoDB connection
connectionDB('mongodb://127.0.0.1:27017/UserDataModel')

//ejs
app.set("view engine",'ejs');
app.set("views",path.resolve('./views'))

//Middlewares
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//routes
app.get('/test',(req,res)=>{
    res.json("hello world")
})

//server
app.listen('8000',()=>{
    console.log("Server Started at localhost 8000");
    
})