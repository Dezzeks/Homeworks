const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const fs = require("fs");
app.use(bodyParser.urlencoded({}));
app.set("view engine", "ejs");
let upload = require("express-fileupload");
app.use(upload());
app.use(express.static('public')) 
app.get("/", (req, res)=>{
    res.render('registr', {err:''});
});

app.post("/registration", (req, res)=>{
    let allInfo={
        userName:req.body.userName,
        userPass:req.body.userPass,
        status:"",
        image:""
    }
    let accInfo = JSON.parse(fs.readFileSync("./accountInfo.txt", "utf8"));
    for (let index = 0; index < accInfo.length; index++) {
        const element = accInfo[index];
        if (req.body.userName == element.userName){
            return res.render('registr',{err:'Такий користувач уже існує'});
        }};
    accInfo.push(allInfo);
    fs.writeFileSync("./accountInfo.txt", JSON.stringify(accInfo));
    res.render('vhod', {alert:''});
})

app.post("/vhod", (req, res)=>{
    let userInfo = JSON.parse(fs.readFileSync("./accountInfo.txt", "utf8"));
    for (let index = 0; index < userInfo.length; index++) {
        const element = userInfo[index];
        if (req.body.name == element.userName){
            if (req.body.pass == element.userPass){
                res.render('profile',{info:element});
            }else{
                return res.render('vhod', {alert:'Невірний пароль'});
            }}};
                return res.render('vhod', {alert:'Невірний логін'});
});
app.post("/profile", (req, res)=>{
    let imageName = "./public/" +req.query.name+'.'+ req.files.image.name.split('.').pop();
    let userInfo = JSON.parse(fs.readFileSync("./accountInfo.txt", "utf8"));
    for (let index = 0; index < userInfo.length; index++) {
        const element = userInfo[index];
        if (req.query.name == element.userName){
               userInfo[index].status=req.body.status
               userInfo[index].image=userInfo[index].userName + '.' + req.files.image.name.split('.').pop();
               fs.writeFileSync("./accountInfo.txt", JSON.stringify(userInfo));
               req.files.image.mv(imageName, (err) => {
                if (err) {
                   return res.render('profile',{info:element, alert:'Помилка'}); 
                }
                return res.render('profile',{info:element, alert:'гуд'});
              });                   
           }  
        }
});

app.listen(3000, ()=>console.log("Сервер запущен..."));