const express = require('express');
const app = express();
const path = require('path');

// console.log(path.join(__dirname, 'client'));

app.use(express.static(path.join(__dirname, 'client')));