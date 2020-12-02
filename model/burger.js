var orm = require("../config/orm.js");
var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  make: function(cols, vals, cb) {
    orm.make("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;