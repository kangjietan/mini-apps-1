const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000);

app.use(express.static(path.join(__dirname, 'client')));

app.post('/submit', (req, res, next) => {
  console.log('Client sent POST request!', req.body);
  // res.download('./samples/csv_report.csv', 'csv_report.csv', (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Success');
  //   }
  // });

  // var options = {
  //   root: path.join(__dirname, 'samples')
  // }

  // res.sendFile('csv_report.csv', options, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('success');
  //   }
  // })
});