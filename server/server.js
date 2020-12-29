const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const db = require("./model/marvelModel");
const loginRoutes = require("./routes/loginRoutes");
const PORT = 3000;
// const App = require('../client/components/App.jsx');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("client"));
app.use(morgan("tiny"));
app.listen(PORT, () => {
  console.log(`WE BE LISTENING: ${PORT}`);
});


// router that will handle login/sinup 
app.use('/login', loginRoutes);


app.get("/", (req, res) => res.status(200).sendFile(path.join(__dirname, "../client/index.html")));



// catch all error handler
app.use((req, res) => res.sendStatus(404));


// global express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught known middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



