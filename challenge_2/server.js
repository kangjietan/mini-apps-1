const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
var Promise = require('bluebird');
const writeFileAsync = Promise.promisify(fs.writeFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000);

app.use(express.static(path.join(__dirname, 'client')));

app.post('/submit', (req, res, next) => {
  // console.log('Client sent POST request!', req.body.input);
  var clientInput = JSON.parse(req.body.input)
  // console.log(clientInput);
  var results = [];
  var strings = [];
  var columns = [];
  
  // Make JSON data more easily accessible
  var flattenData = (obj) => {
    var result = [];
    var inputKeys = Object.keys(obj);
    for (var i = 0; i < inputKeys.length; i++) {
      var k = inputKeys[i];
      if (Array.isArray(obj[k])) {
        for (var j = 0; j < obj[k].length; j++) {
          results.push((flattenData(obj[k][j])));
        }
      }
      
      // Filter for non-array
      if (!Array.isArray(obj[k])) {
        if (columns.indexOf(k) < 0) {
          columns.push(k);
        } 
        result.push([obj[k]]);
      }
    }

    return result;
  }

  results.push(flattenData(clientInput));
  // console.log(results);

  // Convert into string
  for (var i = 0; i < results.length; i++) {
    var innerArray = results[i];
    // console.log(i, innerArray.length);
    var row = '';
    for (var j = 0; j < innerArray.length; j++) {
      row += innerArray[j] + ', ';
      if (j === innerArray.length - 1) {
        row += '\n';
      }
    }

    strings.push(row);
  }

  // Add new line to column names
  columns.push('\n');
  // console.log(strings);

  // Flatten arr to turn into one string with newline
  const flattened = arr => { return [].concat(...arr) };
  var flatString = flattened(strings);
  // flatString = flatString.join('');
  
  // Add column names as well
  // columns = columns.join(' ');
  flatString = columns.concat(flatString);
  // console.log(flatString);

  // Write to file that one string
  writeFileAsync('test.txt', flatString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Writing!');
    }
  })
  .then(
    () => {
      // res.download('./test.txt', 'test.txt', (err) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log('Success');
      //   }
      // });

      var options = {
        root: path.join(__dirname)
      } 

      res.sendFile('test.txt', options, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success');
        }
      })
    });
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