'use strict';

const express = require('express');

const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  console.log({ dirname: __dirname });
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log(`The application is running on port 3000.`);
});