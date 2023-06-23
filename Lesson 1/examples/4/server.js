// // подключение express
// const express = require("express");
// // создаем объект приложения
// const app = express();
// // определяем обработчик для маршрута "/"
// app.get("/", function(req, res){
     
//     // отправляем ответ
//     res.send("<h2>Привет Express!</h2>");
// });
// // начинаем прослушивать подключения на 3000 порту
// app.listen(3000);





// const express = require("express");
 
// const app = express();
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1><a href='/contact'>Контакти</a>");
// });
// app.get("/about", function(request, response){  // В URL Можна використовувати регулярки
     
//     response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function(request, response){
     
//     response.send("<h1>Контакты</h1>");
//         // response.redirect("/about")
// });
// app.listen(3000);



//Відправка файла
// const express = require("express");
// const app = express();
 
// app.use(function (request, response) {
//   response.sendFile(__dirname + "/index.html");
// });
 
// app.listen(3000);

app.get("/about", function(request, response){
    response.send("<h1>About</h1><h2>About</h2><h3>About</h3><a href='/'>Home</a><a href='/about'>About</a><a href='/form'>Form</a><a href='/users'>Users</a>"
    );});
    response.send("")
app.get("/form", function(request, response){
    response.send("<h1>From</h1><h2>From</h2><h3>From</h3><a href='/'>Home</a><a href='/about'>About</a><a href='/form'>Form</a><a href='/users'>Users</a>"
    );});
app.get("/users", function(request, response){
    response.send("<h1>Users</h1><h2>Users</h2><h3>Users</h3><a href='/'>Home</a><a href='/about'>About</a><a href='/form'>Form</a><a href='/users'>Users</a>"
    );});

//Статус коди
// const express = require("express");
// const app = express();
 
// app.use("/home/foo/bar",function (request, response) {
//   response.status(404).send(`Ресурс не найден`);
// });
 
// app.listen(3000);

//Передача інформації по URL
//http://localhost:3000/about?id=3&name=Tome
// const express = require("express");
  
// const app = express();
// app.get("/", function(request, response){
      
//     response.send("<h1>Главная страница</h1>");
// });
// app.use("/about", function(request, response){
      
//     let id = request.query.id;
//     let userName = request.query.name;
//     response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
// });
 
// app.listen(3000);




// // Робота з формою
// const express = require("express");
   
// const app = express();
   
// // создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({extended: false});
 
// app.get("/", function (request, response) {
//     response.sendFile(__dirname + "/index.html");
// });
// app.post("/form", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });
   
// app.listen(3000, ()=>console.log("Сервер запущен..."));




const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
   
app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
});
app.post("/form", (req, res)=> {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.userName} - ${req.body.userAge}`);
    // res.status(204).send();;
});
   
app.listen(3000, ()=>console.log("Сервер запущен..."));