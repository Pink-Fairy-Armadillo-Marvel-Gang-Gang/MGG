const express = require('express')
const app = express()
// const path = require('path')
const morgan = require('morgan')
const db = require('./model/marvelModel')
const routes = require('./routes/api')
const { v4: uuidv4 } = require('uuid')
const PORT = 3000;
const App = require('../client/components/App'); // do i have to path this? how do i get the data from this

// VM: WE MIGHT NEED TO NPM INSTALL PG-PROMISE BUT NOT SURE

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));


// app.get('/profile/:name', function(req,res){
//     res.render('profile', {person: req.params.name})
// })


app.use('/', (req, res) => {
  db.createFavoritesTable();
});

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log('test at backend')
  db.query("INSERT INTO users (id, username, password) VALUES ($1,$2, $3)",
    [uuidv4(), 
      username, 
      password],
    (err, result) => {
      console.log(err)
    }
  );
});


app.get('/:id', (req, res) => {
  const newFav = req.params;
  db.query('SELECT * FROM people WHERE people._id = $1', [req.params.id])
    .then((result) => console.log(result.rows[0]))
    .catch((err) => console.log(`ERROR: ${err}`));
});




/*

// request to userpPge
app.get('/userPage', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../homepage.js'));
})

*/



app.use(morgan('tiny'));
app.listen(PORT, () => {
  console.log(`WE BE LISTENING: ${PORT}`);
});



