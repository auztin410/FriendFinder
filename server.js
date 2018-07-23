var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('data'));

var surveryResults = [];



app.listen(PORT, function () {
    console.log("App listening on PORT: http://localhost:" + PORT);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
})

app.post("/characters", function (req, res) {

    surveryResults.push(req.body);

    

    var one = parseInt(surveryResults[0].one);
    var two = parseInt(surveryResults[0].two);
    var three = parseInt(surveryResults[0].three);
    var four = parseInt(surveryResults[0].four);
    var five = parseInt(surveryResults[0].five);
    var six = parseInt(surveryResults[0].six);
    var seven = parseInt(surveryResults[0].seven);
    var eight = parseInt(surveryResults[0].eight);

    var surveyScore = one += two += three += four += five += six += seven += eight;
    
    console.log(req.body);
    console.log(surveyScore);

    if (surveyScore >= 30) {
        res.sendFile(path.join(__dirname, "/public/morty.html"));
    }
    else if (surveyScore >= 26) {
        res.sendFile(path.join(__dirname, "/public/birdperson.html"));
    }
    else if (surveyScore >= 22) {
        res.sendFile(path.join(__dirname, "/public/squanchy.html"));
    }
    else if (surveyScore >= 18) {
        res.sendFile(path.join(__dirname, "/public/beth.html"));
    }
    else if (surveyScore >= 14) {
        res.sendFile(path.join(__dirname, "/public/summer.html"));
    }
    else {
        res.sendFile(path.join(__dirname, "/public/jerry.html"));
    }

    surveryResults = [];
});