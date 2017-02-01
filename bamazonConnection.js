var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // username
  user: "root",

  // password
  password: "root",

  //database location
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM products', function(err, res) {
	if(err) throw err;
	console.log(res);

console.log('What product would you like to order?');

var prompt = require('prompt');

  prompt.start();

  prompt.get(['itemID', 'quantity'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Your order summary:');
    console.log('  Username: ' + result.itemID);
    console.log('  Email: ' + result.quantity);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
} );