CREATE DATABASE checkout;

USE checkout;

CREATE TABLE records (
  usersname VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  line1 VARCHAR(100),
  line2 VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zip VARCHAR(100),
  credit VARCHAR(100),
  date VARCHAR(100),
  billing VARCHAR(100)
);

-- CREATE TABLE user (
--   name VARCHAR(100),
--   email VARCHAR(100),
--   password VARCHAR(100)
-- );

-- CREATE TABLE address (
--   line1 VARCHAR(100),
--   line2 VARCHAR(100),
--   city VARCHAR(100),
--   state VARCHAR(100),
--   zip VARCHAR(100),
--   credit VARCHAR(100),
-- );

-- CREATE TABLE cardInfo (
--   credit VARCHAR(100),
--   date VARCHAR(100),
--   billing VARCHAR(100),
-- );