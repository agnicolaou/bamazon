CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products
(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price FLOAT(6,2) NOT NULL,
stock_qty INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES
("HK Shirt", "Apparel", 25, 18),
("Metallic Print 11x14", "Art", 30, 96),
("NC Hat", "Apparel", 20, 12),
("HK Pin", "Accessories", 8, 46),
("BJ Shirt", "Apparel", 25, 11),
("ALF Pin", "Accessories", 8, 46),
("Canvas Print 16x20", "Art", 80, 14),
("E.T.", "Magnets", 3, 82),
("Batman", "Magnets", 3, 35),
("Pee-wee", "Magnets", 3, 73)