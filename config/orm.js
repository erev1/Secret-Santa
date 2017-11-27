
// Dependencies
var connection = require("./connection.js");

// ORM


var orm = {

  all: function(table, callback) {

    var q = "SELECT * FROM " + table

    connection.query(q, function(err, result) {
      callback(result);
    });

  },

  addPersonToPairs: function(person, pair, callback) {

    var q = "INSERT INTO pairs (name, secret_santa) VALUES (\"" + person +"\", \"" + pair +"\");"
    console.log(q)
    connection.query(q, function(err, result) {
      callback(result);
      console.log("result " +result)
    });

  },

  deletePersonFromPeopleRemaining: function(name, cb) {
    var queryString = "DELETE FROM people_remaining WHERE name = \"" + name + "\";"

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

module.exports = orm;
