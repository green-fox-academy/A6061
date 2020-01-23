const express = require('express');
const app = express();
const port = 3000;
let database = { todos: ['get up', 'survive', 'go back to bed'] };

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('ToDo');
});

app.get('/list', (req, res) => {
  res.render('home', { todos: database.todos, title: 'ToDo' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});