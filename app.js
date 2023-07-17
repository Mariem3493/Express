// importation du module express et du middleware daterequire
const express = require("express");
const daterequire = require("./Views/MiddleWare/date.js");

// init express
const app = express ();
//Middleware
app.get("/",daterequire, (req,res)=> {
    res.send("<h1>hello world</h1> <a href='home'><click here to start app</a>");
});
app.get("/home",daterequire, (req,res)=> {
    res.sendFile(__dirname+"/Views/home.html");
});
app.get("/Service",daterequire, (req,res)=> {
    res.sendFile(__dirname+"/Views/Service.html");
});
app.get("/contact",daterequire, (req,res)=> {
    res.sendFile(__dirname+"/Views/contact.html");
});
//port
app.listen(5001,err =>{
    if (err) {console.log(err)}
    else console.log("server is running on http://localhost:5001")
});

