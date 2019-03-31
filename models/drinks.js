module.exports = function(sequelize, DataTypes) {
  var Drinks = sequelize.define("drinks", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    strDrink: DataTypes.STRING,
    dateModified: DataTypes.STRING,
    idDrink: DataTypes.INTEGER,
    strAlcoholic: DataTypes.STRING,
    strCategory: DataTypes.STRING,
    strDrinkThumb: DataTypes.STRING,
    strGlass: DataTypes.STRING,
    strIBA: DataTypes.STRING,
    strIngredient1: DataTypes.STRING,
    strIngredient10: DataTypes.STRING,
    strIngredient11: DataTypes.STRING,
    strIngredient12: DataTypes.STRING,
    strIngredient13: DataTypes.STRING,
    strIngredient14: DataTypes.STRING,
    strIngredient15: DataTypes.STRING,
    strIngredient2: DataTypes.STRING,
    strIngredient3: DataTypes.STRING,
    strIngredient4: DataTypes.STRING,
    strIngredient5: DataTypes.STRING,
    strIngredient6: DataTypes.STRING,
    strIngredient7: DataTypes.STRING,
    strIngredient8: DataTypes.STRING,
    strIngredient9: DataTypes.STRING,
    strInstructions: DataTypes.TEXT,
    strMeasure1: DataTypes.STRING,
    strMeasure10: DataTypes.STRING,
    strMeasure11: DataTypes.STRING,
    strMeasure12: DataTypes.STRING,
    strMeasure13: DataTypes.STRING,
    strMeasure14: DataTypes.STRING,
    strMeasure15: DataTypes.STRING,
    strMeasure2: DataTypes.STRING,
    strMeasure3: DataTypes.STRING,
    strMeasure4: DataTypes.STRING,
    strMeasure5: DataTypes.STRING,
    strMeasure6: DataTypes.STRING,
    strMeasure7: DataTypes.STRING,
    strMeasure8: DataTypes.STRING,
    strMeasure9: DataTypes.STRING,
    strVideo: DataTypes.STRING
  }, {
    timestamps: false
  })

  return Drinks;
}