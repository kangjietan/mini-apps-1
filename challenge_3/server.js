const express = require('express');
const app = express();
const db = require('./db/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000);

app.use(express.static('public'));

app.post('/purchase', (req, res) => {
  console.log("User send POST request", req.body);
  var params = [ 
    req.body.name, 
    req.body.email, 
    req.body.password, 
    req.body.line1, 
    req.body.line2, 
    req.body.city, 
    req.body.state, 
    req.body.zip, 
    req.body.credit, 
    req.body.date, 
    req.body.billing
  ];

  var queryStr = 'insert into records \
    (name, email, password, line1, line2, city, state, zip, credit, date, billing) \
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(queryStr, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
    res.end();
  })
});

// name
// email
// password
// line1
// line2
// city
// state
// zip
// credit
// date
// billing

// req.body.name, 
// req.body.email, 
// req.body.password, 
// req.body.line1, 
// req.body.line2, 
// req.body.city, 
// req.body.state, 
// req.body.zip, 
// req.body.credit, 
// req.body.date, 
// req.body.billing