var express = require("express");
var burger = require ("../model/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data) {
        var hdlbrs = {
            burgers: data
        };
        console.log(hdlbrs)
        res.render("index", hdlbrs);
    });
    router.post("/api/burgers", function(req, res){
        burger.insertOne(
            ["burgers_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result) {
            res.json({ id: result.insertId});
            }
        );
    });
    router.put("/api/burgers/:id", function(req, res){
        var condition = "id =" + req.params.id;
        burger.update({ devoured: req.body.devoured}, condition, function (result) {
            if ((result. changeRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    router.delete("/api/burgers/:id", function (req, res) {
        var condition = "id =" + req.params.id;
        burger.deleteOne(condition, function (result) {
            if ((result. changeRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
module.exports = router