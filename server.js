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

var characterSelect = [
    {
        name: "morty",
        high: 34,
        low: 30
    },
    {
        name: "bird-person",
        high: 29,
        low: 26
    },
    {
        name: "squanchy",
        high: 25,
        low: 22
    },
    {
        name: "beth",
        high: 21,
        low: 18
    },
    {
        name: "summer",
        high: 17,
        low: 14
    },
    {
        name: "jerry",
        high: 13,
        low: 0
    }
]

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

    if (characterSelect[0].high >= surveyScore  && surveyScore >= characterSelect[0].low) {
        res.sendFile(path.join(__dirname, "/public/morty.html"));
    }
    else if (characterSelect[1].high >= surveyScore  && surveyScore >= characterSelect[1].low) {
        res.sendFile(path.join(__dirname, "/public/birdperson.html"));
    }
    else if (characterSelect[2].high >= surveyScore  && surveyScore >= characterSelect[2].low) {
        res.sendFile(path.join(__dirname, "/public/squanchy.html"));
    }
    else if (characterSelect[3].high >= surveyScore  && surveyScore >= characterSelect[3].low) {
        res.sendFile(path.join(__dirname, "/public/beth.html"));
    }
    else if (characterSelect[4].high >= surveyScore  && surveyScore >= characterSelect[4].low) {
        res.sendFile(path.join(__dirname, "/public/summer.html"));
    }
    else {
        res.sendFile(path.join(__dirname, "/public/jerry.html"));
    }

    surveryResults = [];
});

app.get("/api/characters", function(req, res) {
    return res.json(characterSelect);
  });

  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < characterSelect.length; i++) {
      if (chosen === characterSelect[i].name) {
        return res.json(characterSelect[i]);
      }
    }
  
    return res.json(false);
  });