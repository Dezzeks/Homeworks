const express = require("express");
const app = express();
var bodyParser = require('body-parser');
let upload = require("express-fileupload");
let mongoose = require('mongoose');
app.use(upload());
app.use(express.static('public')); 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
const userRoute = require('./router/users')

async function start (){
    await mongoose.connect("mongodb+srv://Dezzeks:1111@cluster0.ndsopps.mongodb.net/?retryWrites=true&w=majority");
    app.listen(3000, ()=>console.log("Сервер запущен..."));
}
start ()
app.use(userRoute);