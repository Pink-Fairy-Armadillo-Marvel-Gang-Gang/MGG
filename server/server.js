const express = require('express');
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const marvelSchema = require('./model/marvelModel')
const routes = require('./routes/api')
const PORT = 3000;


app.get('/', (req, res) => {
    return res.status(200).send("WE IN HERE GANG GANG!");
})




app.use(express.json()); // check this
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});



