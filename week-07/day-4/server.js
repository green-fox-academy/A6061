'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '[?]',
  database: 'bookstore',
});

const SQLquery = (queryParameter) => {

  let queryString =
  `SELECT aut_name, book_name, cate_descrip, pub_name, book_price FROM book_mast 
  INNER JOIN author ON book_mast.aut_id = author.aut_id 
  INNER JOIN category ON book_mast.cate_id = category.cate_id 
  INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id`

  let queryKeys = Object.keys(queryParameter);
  let queryValues = Object.values(queryParameter);

  if (queryParameter) {
    for (let i = 0; i < queryValues.length; i++) {
      if (i === 0) {
        queryString += ' WHERE ';
      } else {
        queryString += ' AND ';
      }
      switch (queryKeys[i]) {
        case 'category':
          queryString += `cate_descrip = "${queryValues[i]}"`;
          console.log(queryKeys);
          console.log(queryValues);
          console.log(queryString);
          break;
        case 'publisher':
          queryString += `pub_name = "${queryValues[i]}"`;
          console.log(queryKeys);
          console.log(queryValues);
          console.log(queryString);
          break;
        case 'plt':
          queryString += `book_price < ${queryValues[i]}`;
          console.log(queryKeys);
          console.log(queryValues);
          console.log(queryString);
          break;
        case 'pgt':
          queryString += `book_price > ${queryValues[i]}`;
          console.log(queryKeys);
          console.log(queryValues);
          console.log(queryString);
          break;
      }
    }
  }
  return queryString += ';';
}

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/titles', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', function (err, rows) {
    res.send(rows);
  });
});

app.get('/books', (req, res) => {
  conn.query(SQLquery(req.query), function (err, rows) {
    res.send(rows);
  });
});

app.listen(3000);