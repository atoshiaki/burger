const mysql = require("mysql");

if (process.env.JAWSBD_URL){
    connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
    connection = mysql.createConnection({
        host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "hyx0mkg1scn4d8f6",
        password: "lgkkmytyq2nwn71b",
        database: "goxxvgssv3lewwnr"
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