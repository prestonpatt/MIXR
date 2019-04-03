/* eslint-disable prettier/prettier */
module.exports = function (sequelize, DataTypes) {
  var Ingredients = sequelize.define("ingredients", {
    strIngredient: DataTypes.STRING,
    strMeasure: DataTypes.STRING

  }, {
    timestamps: false
  });

  Ingredients.associate = function (models) {
    Ingredients.belongsTo(models.drinks);
  };
  return Ingredients;
};