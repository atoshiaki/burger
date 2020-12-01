var connection = require("../config/connection");
var orm = {
    selectAll: function(table, cb){
        var dbQ = "SELECT * FROM " + table +";";
        connection.query(dbQ, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
    insertOne: function(table, cols, vals, cb){
        var dbQ = "INSERT INTO" + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(val.length) + ") ";
    }
};
