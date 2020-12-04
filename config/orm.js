var connection = require("../config/connection.js");
function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}
function translateSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
}

var orm = {
    all: function(table, cb){
        var dbQ = "SELECT * FROM " + table +";";
        connection.query(dbQ, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb){
        var dbQ = "INSERT INTO" + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(val.length) + ") ";
        console.log(dbQ);
    },

    update: function(table, objColVals, condition, cb) {
        var dbQ =
          "UPDATE " +
          table +
          " SET " +
          translateSql(objColVals) +
          " WHERE " +
          condition;
        console.log(dbQ);
    connection.query(dbQ, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    deleteOne: function(table, condition, cb) {
      var dbQ = "DELETE FROM " + table + " WHERE " + condition;
      console.log(dbQ);
      connection.query(dbQ, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    }
};
module.exports = orm;