var express = require("express");
var bP = require("body-parser");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3306;

app.use(express.static.("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burgers_controller.js")
app.use(routes);

app.listen(PORT, function () {
    console.log("server listening on:" + PORT);
});

