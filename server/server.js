const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const db = require('./model/marvelModel')
const routes = require('./routes/api')
const PORT = 3000;
// const App = require('../client/components/App.jsx'); 


// VM: WE MIGHT NEED TO NPM INSTALL PG-PROMISE BUT NOT SURE

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));


// app.get('/profile/:name', function(req,res){
//     res.render('profile', {person: req.params.name})
// })


// app.use('/', (req, res) => {
  
//   // db.createFavoritesTable();
// })

app.get('/', (req, res) => {
  db.createUsersTable();
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/signup', (req, res) => {
  db.createUsersTable();
  const { username } = req.body;
  const { password } = req.body;
  console.log(process.env.PG_URI)
  console.log(username, password)
  // console.log('test at backend')
  db.query('INSERT INTO users (username, password) VALUES ($1, $2)',
    [username, 
      password],
    (err, result) => {
      if (err == 'error: duplicate key value violates unique constraint "users_username_key"') console.log('Username already exists')
      else if (err) console.log(err);
      else console.log('SIGNUP SUCCESSFUL!');
    });
});


app.post('/login', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  console.log('at login')

  db.query(
  "SELECT * FROM users WHERE username = $1 AND password = $2;",
  [username, password],
  (err, loginResult) => {
    if (err) console.log(`LOGIN ERROR: ${err}`)
    else if (loginResult.rows.length === 0) {
      db.query(
      "SELECT * FROM users WHERE username = $1;",
      [username],
      (err, userRes) => {
        if (err) console.log(`USERNAME CHECK ERROR: ${err}`)
        else if (userRes.rows.length === 0) {
          console.log('USERNAME DOES NOT EXIST. PLEASE SIGN UP')
        } else {
          console.log('INCORRECT PASSWORD')
        }
      // if (result.length > 0) { 
      //   res.send(result)
      // } else {
      //   res.send({message: "wrong username/password combo"})
      // }
      })
    } else console.log('SUCCESS!')
  })
})


// app.get('/:id', (req, res) => {
//   const newFav = req.params;
//   db.query('SELECT * FROM people WHERE people._id = $1', [req.params.id])
//     .then((result) => console.log(result.rows[0]))
//     .catch((err) => console.log(`ERROR: ${err}`));
// });





/*

// request to userpPge
app.get('/userPage', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../homepage.js'));
})

*/

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



