/* eslint-disable prettier/prettier */
module.exports = function (sequelize, DataTypes) {
  var Ingredients = sequelize.define("ingredients", {
    strName: DataTypes.STRING,
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