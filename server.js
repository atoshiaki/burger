var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./control/burger_control.js");
app.use(routes);

app.listen(PORT, function () {
    console.log("server listening on:" + PORT);
});