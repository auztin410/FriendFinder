var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var surveryResults = 0;

app.listen(PORT, function(){
    console.log("App listening on PORT: http://localhost:" + PORT);
});

app.post("/characters", function(req, res){
    if(surveryResults >= 30){
        res.sendFile(path.join(__dirname, "public/morty.html"));
    }
    else if(surveryResults >= 26){
        res.sendFile(path.join(__dirname, "public/birdperson.html"));
    }
    else if(surveryResults >= 22){
        res.sendFile(path.join(__dirname, "public/squanchy"));
    }
    else if(surveryResults >= 18){
        res.sendFile(path.join(__dirname, "public/beth,html"));
    }
    else if(surveryResults >= 14){
        res.sendFile(path.join(__dirname, "public/summer.html"));
    }
    else{
        res.sendFile(path.join(__dirname, "public/jerry.html"));
    }
});