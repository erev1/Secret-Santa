var express = require("express");

var router = express.Router();
var orm = require("../config/orm.js");

function randomNumber(array) {
  var number = Math.floor(Math.random() * (((array.length - 1) - 0) + 1) + 0)

  return number
}

function givePair(person, listofpeople) {
  var pair
  random = randomNumber(listofpeople)
  while (listofpeople[random].name === person) {
    random = randomNumber(listofpeople)
  }
  pair = listofpeople[random].name

  return pair
}

router.get("/", function(req, res) {
  orm.all("pairs", function(data) {
    var hbsObject = {
      people: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// If a user sends data to add a new person...
router.post("/api/pairs", function(req, res) {

  // Take the request...
  var newName = req.body.name;
  var pair
  var pairsTotal

  orm.all("pairs", function(data){
    pairsTotal = data.length
    console.log("pairs total " + pairsTotal)

    for (var i=0; i < data.length; i++){
      if (data[i].name === newName) {
        res.send(data[i].secret_santa)
        return
      }
    }

    orm.all("people_remaining", function(data) {

      pair = givePair(newName, data)

      res.send(pair)

      orm.addPersonToPairs(newName, pair, function(data) {
        console.log("data passed was " + data);
      });

      orm.deletePersonFromPeopleRemaining(pair, function(data) {
        console.log("deleted person was: "+ data.name)
      })

    })

  })

  


});


module.exports = router