const express = require('express');
const app = express();
const path = require('path');

// console.log(path.join(__dirname, ".."));
// console.log(path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname, "..", 'public')));
app.listen(3000);