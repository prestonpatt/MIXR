DROP DATABASE IF EXISTS cocktailDB;
CREATE DATABASE cocktailDB;

USE cocktailDB;

CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
	nameFirst varchar(255) NOT NULL,
    nameLast varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    age integer(10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE drinks (
    `id` INT,
    `strDrink` VARCHAR(37) CHARACTER SET utf8,
    `dateModified` DATETIME,
    `idDrink` INT,
    `strAlcoholic` VARCHAR(16) CHARACTER SET utf8,
    `strCategory` VARCHAR(20) CHARACTER SET utf8,
    `strDrinkThumb` VARCHAR(68) CHARACTER SET utf8,
    `strGlass` VARCHAR(24) CHARACTER SET utf8,
    `strIBA` VARCHAR(21) CHARACTER SET utf8,
    `strIngredient1` VARCHAR(26) CHARACTER SET utf8,
    `strIngredient10` VARCHAR(13) CHARACTER SET utf8,
    `strIngredient11` VARCHAR(13) CHARACTER SET utf8,
    `strIngredient12` VARCHAR(13) CHARACTER SET utf8,
    `strIngredient13` INT,
    `strIngredient14` INT,
    `strIngredient15` INT,
    `strIngredient2` VARCHAR(26) CHARACTER SET utf8,
    `strIngredient3` VARCHAR(26) CHARACTER SET utf8,
    `strIngredient4` VARCHAR(21) CHARACTER SET utf8,
    `strIngredient5` VARCHAR(19) CHARACTER SET utf8,
    `strIngredient6` VARCHAR(26) CHARACTER SET utf8,
    `strIngredient7` VARCHAR(20) CHARACTER SET utf8,
    `strIngredient8` VARCHAR(17) CHARACTER SET utf8,
    `strIngredient9` VARCHAR(13) CHARACTER SET utf8,
    `strInstructions` VARCHAR(836) CHARACTER SET utf8,
    `strMeasure1` VARCHAR(18) CHARACTER SET utf8,
    `strMeasure10` VARCHAR(12) CHARACTER SET utf8,
    `strMeasure11` VARCHAR(13) CHARACTER SET utf8,
    `strMeasure12` VARCHAR(12) CHARACTER SET utf8,
    `strMeasure13` VARCHAR(1) CHARACTER SET utf8,
    `strMeasure14` VARCHAR(1) CHARACTER SET utf8,
    `strMeasure15` VARCHAR(1) CHARACTER SET utf8,
    `strMeasure2` VARCHAR(38) CHARACTER SET utf8,
    `strMeasure3` VARCHAR(23) CHARACTER SET utf8,
    `strMeasure4` VARCHAR(20) CHARACTER SET utf8,
    `strMeasure5` VARCHAR(24) CHARACTER SET utf8,
    `strMeasure6` VARCHAR(16) CHARACTER SET utf8,
    `strMeasure7` VARCHAR(21) CHARACTER SET utf8,
    `strMeasure8` VARCHAR(14) CHARACTER SET utf8,
    `strMeasure9` VARCHAR(18) CHARACTER SET utf8,
    `strVideo` INT
);

CREATE TABLE liquors
(
	id int NOT NULL AUTO_INCREMENT,
	nameFirst varchar(255) NOT NULL,
    nameLast varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    age integer(10) NOT NULL,
	PRIMARY KEY (id)
);