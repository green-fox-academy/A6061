'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '[Fecske]',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  conn.query('SELECT aut_name, book_name, book_mast.aut_id, pub_id, book_price FROM book_mast, author INNER JOIN author ON book_mast.aut_id = author.aut_id;', function (err, rows) {
    console.log(rows);
    res.send(rows);
  })
});

app.listen(3000);

// SELECT aut_name, book_name FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id, INNER etc - tbc