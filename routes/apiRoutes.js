/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/drinks", function (req, res) {
<<<<<<< Updated upstream
    db.drinks.findAll({}).then(function (result) {
      res.json(result);
    });
  }),
  app.get("/api/:drink", function (req, res) {
    db.drinks.findAll({
      where: {
=======
    console.log(req.query);
    var options = {};
    if (req.query.attributes) {
      options.attributes = req.query.attributes.split(",");
    }
    if (req.query.limit) {
      options.limit = parseInt(req.query.limit);
    }

    if (req.query.find) {
      options.where = {
>>>>>>> Stashed changes
        $or: [
          { 'strIngredient1': { like: '%' + req.query.find + '%' } },
          { 'strIngredient2': { like: '%' + req.query.find + '%' } },
          { 'strIngredient3': { like: '%' + req.query.find + '%' } },
          { 'strIngredient4': { like: '%' + req.query.find + '%' } },
          { 'strIngredient5': { like: '%' + req.query.find + '%' } },
          { 'strIngredient6': { like: '%' + req.query.find + '%' } },
          { 'strIngredient7': { like: '%' + req.query.find + '%' } },
          { 'strIngredient8': { like: '%' + req.query.find + '%' } },
          { 'strIngredient9': { like: '%' + req.query.find + '%' } },
          { 'strIngredient10': { like: '%' + req.query.find + '%' } },
          { 'strIngredient11': { like: '%' + req.query.find + '%' } },
          { 'strIngredient12': { like: '%' + req.query.find + '%' } }
        ]

      };
    }

    db.drinks.findAll(options).then(function (result) {
      res.json(result);
    });
  }),


  app.get("/api/drinks/:drinkId", function (req, res) {
    db.drinks.findByPk(req.params.drinkId).then(function (result) {
      res.json(result);
    });
    // res.status(200)
  });
};