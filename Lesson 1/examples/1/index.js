
// Модуль http
// const http = require("http");
// http.createServer(function(request,response){
//      console.log(request);
//     response.end("Hello NodeJS!");
     
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Server listen 3000");
// });






// Приклад використання інших внутрішніх  модулів
// const os = require("os");
// let fs = require('fs');
// let textFromFile = fs.readFileSync('./links.txt', 'utf8');
// let userName = os.userInfo().username;
// console.log(textFromFile);
// console.log(userName);





//Використання зовнішніх модулів
// const os = require("os");
// const greeting = require("./greeting");
 
// let userName = os.userInfo().username;

// console.log(greeting)
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));





//Викорисатння конструкторів і обєктів в модулі
const User = require("./user.js");
 
let eugene = new User("Eugene", 32);
// eugene.displayInfo();

// console.log(eugene)
eugene.sayHi();