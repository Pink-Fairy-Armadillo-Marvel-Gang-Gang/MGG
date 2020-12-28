const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const db = require('./model/marvelModel')
const routes = require('./routes/api')
const PORT = 3000;


app.use(express.json()); // check this
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

app.get('/signup', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/pages/signup.html'));
})

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log('test at backend')
  db.query("INSERT INTO users (username, password) VALUES ($1,$2)",
    [username, 
      password],
    (err, result) => {
      if (err) console.log(`ERROR: ${err}`)
      else console.log(`SUCCESS: ${result}`)
    }
  );
});

app.get('/:id', (req, res) => {
  const newFav = req.params;
  db.query('SELECT * FROM people WHERE people._id = $1', [req.params.id])
    .then((result) => console.log(result.rows[0]))
    .catch((err) => console.log(`ERROR: ${err}`));
});


app.use(morgan('tiny'));
app.listen(PORT, () => {
  console.log(`WE BE LISTENING: ${PORT}`);
});



