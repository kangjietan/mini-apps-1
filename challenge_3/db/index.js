const mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'checkout'
});

db.connect();

module.exports = db;