const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send(`Welcome back, Guest!`);
});

// app.get('/name', (req, res) => {
//   res.render('home', { name: 'Kecske'})
// });

app.get('/name', (req, res) => {
  res.send(`Welcome back, ${req.query.name}!`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});