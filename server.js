var express = require("express");
var bP = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(bP.urlencoded({ extended: true }));
app.use(bP.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", + __dirname + "handlebars");

var routes = require("./control/burger_control.js");
app.use(routes);

app.listen(PORT, function () {
    console.log("server listening on:" + PORT);
});