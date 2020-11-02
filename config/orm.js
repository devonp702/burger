var con = require("./connection.js");
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ??";
    con.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    con.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    con.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
