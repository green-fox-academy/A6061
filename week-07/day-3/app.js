'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (!input) {
    res.json({ error: "Please provide an input!" });
  } else {
    res.json({ received: input * 1, result: input * 2 });
  }
})

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (!name && !title) {
    res.status(400).json({ error: "Please provide a name and a title!" });
  } else if (!title) {
    res.status(400).json({ error: "Please provide a title!" });
  } else if (!name) {
    res.status(400).json({ error: "Please provide a name!" });
  } else {
    res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
  }
})

app.get('/appenda/:appendable', (req, res) => {
  res.json({ appended: `${req.params.appendable}a` });
})

app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let until = req.body.until;
  let response = {};
  let num = 0;

  if (!action) {
    response = { error: "Please provide a number!" };

  } else if (action === 'sum') { // 1+2+3...(until)
    let sum = (number) => {
      for (let i = 1; i <= number; i++) {
        num += i;
      }
      return num;
    }
    response = {
      result: sum(until)
    }

  } else if (action === 'factor') { // 1*2*3...(until)
    let factor = (number) => {
      let num = 1
      for (let i = 1; i <= number; i++) {
        num *= i;
      }
      return num;
    }
    response = {
      result: factor(until)
    }
  }

  res.send(response);
});

app.listen(3000, function () {
  console.log(`Port 3000 is ON.`);
});