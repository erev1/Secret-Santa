CREATE DATABASE secret_santa;
USE secret_santa;

CREATE TABLE people_remaining (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(100),
	PRIMARY KEY(id)
)

CREATE TABLE people (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(100),
	PRIMARY KEY(id)
)

CREATE TABLE pairs (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(100),
	pair VARCHAR(100),
	PRIMARY KEY(id)
)