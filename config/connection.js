const mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});
connection.connect(function (err) {
    if (err) {
        console.error("error:" + err.stack);
        return;
    }
    console.log("connected");
});
module.exports = connection;