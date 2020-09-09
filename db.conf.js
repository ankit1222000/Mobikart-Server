const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "Mobikart",
  password: "Mobikart@1234",
  database: "mobikartdb"
});

module.exports=connection;