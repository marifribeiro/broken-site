var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(500).send('Hello World!');
});

app.listen(3000, function () {
  console.log('Serving! http://localhost:3000/');
});