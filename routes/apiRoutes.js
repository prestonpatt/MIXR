var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/:drink", function (req, res) {
    db.drinks.findAll({
      where: {
        $or: [
          { 'strIngredient1': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient2': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient3': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient4': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient5': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient6': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient7': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient8': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient9': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient10': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient11': { like: '%' + req.params.drink + '%' } },
          { 'strIngredient12': { like: '%' + req.params.drink + '%' } }
        ]
      },
    }).then(function (result) {
      res.json(result);
    });
  // res.status(200)
  });



  // Create a new example
  app.post("/api/Drinks", function (req, res) {
    db.Example.create(req.body).then(function (dbDrinks) {
      res.json(dbDrinks);
    });
  });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function (req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function (dbDrinks) {
//       res.json(dbDrinks);
//     });
//   });
};