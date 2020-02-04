'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '[Fecske]',
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
        if (error) {
            console.log(error);
            res.status(500).send('Database Error');
            return;
        }
        res.status(200).send(result);
    })
});

// ADD post
app.post('/posts', (req, res) => {
    let title = req.body.title;
    let url = req.body.url;
    let timestamp = Date.now();
    let score = 0;
    let addPost = `INSERT INTO posts (title, url, timestamp, score)
    VALUES ("${title}", "${url}",${timestamp}, "${score}")`;

    conn.query(addPost, (error, result) => {
        if (error) {
            res.status(500).send({ error: 'Database Error' });
            console.log(error);
            return;
        }// else {
        res.setHeader('Content-Type', 'application/json'); // redundans zarojelben
        res.status(200).json({
            id: result.insertId,
            title: title,
            url: url,
            timestamp: timestamp,
            score: score
        });
        console.log('(ಥ _ ಥ) Incomming Data.', result.insertId);
    });
});

// ADD upvote
app.put('/posts/:id/upvote', (req, res) => {
    let id = req.params.id;
    let queryString = `UPDATE posts SET score=score+1 WHERE id = ?;`
    conn.query(queryString, [id], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Database Error' });
            return;
        }
        conn.query(`SELECT * FROM posts WHERE id = ?;`, [id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(500).send({ error: 'Database error' });
            } else {
                res.status(200).send(result);
            }
        })
        // res.status(200).send(result);
    });
});

// ADD downvote
app.put('/posts/:id/downvote', (req, res) => {
    let id = req.params.id;
    let queryString = `UPDATE posts SET score=score-1 WHERE id = ?;`
    conn.query(queryString, [id], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Database Error' });
            return;
        }
        conn.query(`SELECT * FROM posts WHERE id = ?`, [id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(500).send({ error: 'Database Error' });
            } else {
                res.status(200).send(result);
            }
        })
    })
});

// DELETE Post
app.delete('/posts/:id', (req, res) => {
    let id = req.params.id;
    let queryString = `DELETE FROM posts WHERE id = ?;`
    conn.query(queryString, [id], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Database Error' });
            return;
        }
        conn.query(`SELECT * FROM posts WHERE id = ?`, [id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(500).send({ error: 'Database Error' });
            } else {
                res.status(200).send(result);
            }
        })
    })
});

// Deleted a line from data base, ¯\_(ツ)_/¯ There is no ID:3
app.get("/", function (request, response) {
    console.log(request.headers);
    response.send();
});

app.listen(3000);