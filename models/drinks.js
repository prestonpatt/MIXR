/* eslint-disable prettier/prettier */
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
    strInstructions: DataTypes.TEXT,
    strVideo: DataTypes.STRING
  }, {
    timestamps: false
  });

  Drinks.associate = function(models) {
    Drinks.hasMany(models.ingredients); 
  };

  return Drinks;
};