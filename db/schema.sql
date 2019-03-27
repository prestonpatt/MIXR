DROP DATABASE IF EXISTS cocktailDB;
CREATE DATABASE cocktailDB;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	nameFirst varchar(255) NOT NULL,
    nameLast varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    age integer(10) NOT NULL,
	PRIMARY KEY (id)
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