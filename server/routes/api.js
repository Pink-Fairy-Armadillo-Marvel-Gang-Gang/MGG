

// // import path from 'path'

// // import marvelModel  from '../model/marvelModel' 


// // import userModel from '../model/userModel'
//   //prolly need to import app to get the data?
// // import ________ from _____________

// const mysql = require('mysql');
// // const cors = require("cors");
// const express = require('express');
// const app = express();
// const Axios = require('axios');
// // app.use(express.json());
// // app.use(cors())
// // const router = require('express')

// /*
// app.get('/profile/:name', function(req,res){
//     res.render('profile', {person: req.params.name})
// })


// // get request to user database
// router.get('/users', (req, res) => {
//   // look for the user in the database
//     userModel.find({})
//     // when the data is received
//     .then(data) => {
//         // if no username or password, throw an error
//         if (!data.username || !data.password){ throw err} // check this to redirect to sign up
//         // else, populate the data into the response object
//         res.locals.data = data
//         // send a json response of the data
//         res.json(res.locals.data)
//     }
//     // err handler
//     .catch (err) => {console.log(err)}

// })

// */
// // post route to sign up (this will be the redirect to the user database)



// // possible sign up model sql
// //------ sample sign up model sql


// // const db = mysql.createConnection({
// //   user: "root",
// //   host: "localhost",
// //   password: "password",
// //   database: "LoginSystem",
// // })

// app.post('/signup', (req, res) => {
// const username = req.body.username;
// const password = req.body.password;
// console.log('test at backend')
//   // db.query("INSERT INTO users (username, password) VALUES (?,?)",
//   //  [username, password],
//   //  (err, result) => {
//   //    console.log(err)
//   //  }
//   // );
// });


// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
// console.log('at login')

//   db.query(
//   "SELECT * FROM users WHERE username = ? AND password = ?",
//   [username, password],
//   (err, result) => {
//     if (err) {
//       console.log(err)
//     } 
    
//       if (result.length > 0) { 
//         res.send(result)
//       } else {
//         res.send({message: "wrong username/password combo"})
//       }
//     }
//   )
//   })


// /*


// router.post('/signup/users', (req) => {

//     // declare variable for the data going to usersDB
// let user = new userModel({ name: req.username, password: req.password }); // check use of Model here
//   // save new user
//     user.save(function(err, doc) {
//       // if err return err
//     if (err) {console.error(err)}
//     return res.json({msg: 'Data saved'})
//     });
//     // 
//     .then(data) => {
//             // if the username or password exist in database, console.log('user already exists')
//     if (data.username || data.password) return console.log('user does not exist');
//     }
// })
// // route to signup for signup.html // can we make this a component or js file?
// router.get('/signup', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../client/signup.html'));
// })


// */


// // -------------------------
// // starting to set up the user's homepage
// // router.get('/homepage/search', (req, res) => {
// //     marvelModel.find({})
// //     .then(data) => {
// //         if (!data.username || data.password){ throw err} // check this to redirect to sign up
// //         res.locals.data = data
// //         res.json(res.locals.data)
// //     }
// //     .catch(err) => {
// //         console.log(err)
// //     }
// // }) 
// // // route to signup for signup.html // can we make this a component or js file?
// // router.get('/homepage', (req, res) => {
// //     res.status(200).sendFile(path.join(__dirname, '../client/homepage.html'));
// // })


// app.get('/:id', (req, res) => {
//   const newFav = req.params;
//   db.query('SELECT * FROM people WHERE people._id = $1', [req.params.id])
//     .then((result) => console.log(result.rows[0]))
//     .catch((err) => console.log(`ERROR: ${err}`));
// });




// module.exports = app



// module.exports = app
