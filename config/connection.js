const mysql = require("mysql");

if (process.env.JAWSBD_URL){
    connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};
connection.connect(function (err) {
    if (err) {
        console.error("error:" + err.stack);
        return;
    }
    console.log("connected");
});
module.exports = connection;