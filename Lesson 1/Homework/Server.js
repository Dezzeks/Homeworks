const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const fs = require("fs")
app.use(bodyParser.urlencoded({}))
app.get("/", function(request, response){
    response.sendFile(__dirname + "/home.html");
    });
app.get("/about", function(request, response){
    response.sendFile(__dirname + "/about.html");
    });
app.get("/form", function(request, response){
    response.sendFile(__dirname + "/form.html");
    });
app.get("/users", function(request, response){
    let listUsersBefore = JSON.parse(fs.readFileSync("./before18.txt", "utf8"));
    let listUsersMoreThan = JSON.parse(fs.readFileSync("./moreThan18.txt", "utf8"));
    let before18all = ""
    let after18all = ""
    for (let index = 0; index < listUsersBefore.length; index++) {
        const element = listUsersBefore[index];
        console.log(element)
        let dateBirth = new Date(element.userBirth);
        let userAge = 2023 - dateBirth.getFullYear();
        before18all += `<tr><td>${element.userName}</td><td>${userAge}</td></tr>`
    }
    for (let index = 0; index < listUsersMoreThan.length; index++) {
        const element = listUsersMoreThan[index];
        console.log(element)
        let dateBirth = new Date(element.userBirth);
        let userAge = 2023 - dateBirth.getFullYear();
        after18all += `<tr><td>${element.userName}</td><td>${userAge}</td><td>${element.drinks}</td></tr>`
    }
    response.send(`<h1>Users</h1><h2>Users</h2><h3>Users</h3><a href='/'>Home</a><a href='/about'>About</a><a href='/form'>Form</a><a href='/users'>Users</a>
    <h1>TableUnder18</h1><table><tr><th>Name</th><th>Age</th></tr>${before18all}</table><h1>TableUpper18</h1><table><tr><th>Name</th><th>Age</th><th>Drinks</th></tr>${after18all}</table>`);

    });
app.post("/form", (request, response)=>{ 
    console.log(request.body);
    let dateBirth = new Date(request.body.userBirth);
    let userAge = 2023 - dateBirth.getFullYear();
    let listUsersBefore = JSON.parse(fs.readFileSync("./before18.txt", "utf8"));
    let listUsersMoreThan = JSON.parse(fs.readFileSync("./moreThan18.txt", "utf8"));
    if (userAge >= 18){
    listUsersMoreThan.push(request.body);
    fs.writeFileSync("./moreThan18.txt", JSON.stringify(listUsersMoreThan));
    }else{
    listUsersBefore.push(request.body);
    fs.writeFileSync("./before18.txt", JSON.stringify(listUsersBefore));
    }
    response.send("Дані успішно передані <a href='/users'>Сюда</a>");

});
    










app.listen(3000, ()=>console.log("Сервер запущен..."));