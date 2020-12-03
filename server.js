var express = require("express");
var bP = require("body-parser");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 5502;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./control/burger_control.js")
app.use(routes);

app.listen(PORT, function () {
    console.log("server listening on:" + PORT);
});