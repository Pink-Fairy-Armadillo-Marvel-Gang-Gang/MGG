const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const path = require('path')
const morgan = require('morgan')
const marvelSchema = require('./model/marvelModel')
const routes = require('./routes/api')
const PORT = 3000;
const App = './components/App.jsx'; // do i have to path this? how do i get the data from this



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));


// app.get('/profile/:name', function(req,res){
//     res.render('profile', {person: req.params.name})
// })

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

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



