'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '[?]',
  database: 'reddit',
});

app.use(express.json());

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/hello', (req, res) => {
    res.send('hello world')
});

// GET post(s)
app.get('/posts', (req, res) => {
    let posts = `SELECT * FROM posts`;
    conn.query(posts, (error, result) => {
        if(error){
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.status(200).send(result);
    })
});

// ADD post(s)
app.post('/posts', (req, res) => {
    let id = 0;
    let title = req.body.title;
    let url = req.body.url;
    let timestamp = Date.now();
    let score = 0;
    let addpost = `INSERT INTO posts (title, url, timestamp, score)
    VALUES 
    ("${title}", "${url}",${timestamp}, "${score}")`;
    console.log(addpost);
    conn.query(addpost, (error, result) => {
        if (error) {
            res.status(500).send('DB ERROR');
            console.log(error);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            id: id,
            title: title,
            url: url,
            timestamp: timestamp,
            score: score
        });
        console.log('Watchout ! (ಥ _ ಥ) Data inserted.');
    });
});

app.listen(3000);