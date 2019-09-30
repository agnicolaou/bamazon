var inquirer = require("inquirer");
var mySQL = require("mysql");
require("console.table");

var connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    importData();
})

function importData() {
    connection.query("SELECT * FROM products", function (err, response) {
        console.table(response);
        prompt(response);
    });
}

function prompt(inventory) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "userID",
                message: "Choose a product ID."
            }
        ]).then(function (response) {
            var choiceID = parseInt(response.userID)
            var product = checkInventory(choiceID, inventory)

            if (product) {
                askForQuantity(product)
            }
            else {
                console.log("That item is not in the inventory")
                importData()
            }
        })
};

// askForQuantity
function askForQuantity(userChoice) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "qty",
                message: "How many would you like to order?"
            }
        ]).then(function (response) {
            var quantity = parseInt(response.qty);
            if (quantity > userChoice.stock_qty) {
                console.log("Sorry, not enough in stock.");
                importData();
            } else {
                makePurchase(userChoice, quantity)
            }
        })
};

// makepurchase
function makePurchase(product, quantity) {
    connection.query("UPDATE products SET stock_qty = stock_qty - ? WHERE id = ?", [quantity, product.id], function (err, res) {
        console.log("You purchased " + quantity + " " + product.product_name + "'s");
        importData();
    })
}


// checkInventory
