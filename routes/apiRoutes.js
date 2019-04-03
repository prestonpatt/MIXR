/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/drinks", function (req, res) {
    var options = {};

    
    if (req.query.attributes) {
      options.attributes = req.query.attributes.split(",");
    }
    if (req.query.limit) {
      options.limit = parseInt(req.query.limit);
    }

    if (req.query.find) {
      options.include = {
        model: db.ingredients,
        where: {strName: { like: '%' + req.query.find + '%' }}
      };
    }

    db.drinks.findAll(options).then(function (result) {
      res.json(result);
    });
  }),


  app.get("/api/drinks/:drinkId", function (req, res) {
    db.drinks.findOne({
      where: {
        id: req.params.drinkId
      },
      include: [db.ingredients]
    }).then(function (result) {
      res.json(result);
    });
    // res.status(200)
  });
};