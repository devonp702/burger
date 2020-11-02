-- Drops if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the database --
CREATE DATABASE burgers_db;

-- Make it so all of the following code will affect this--
USE burgers_db;
-- Creates the table "favorite_foods" within employee_db --
CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(60) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);