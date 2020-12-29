const express = require('express');

const router = express.Router();

const db = require("../model/marvelModel");

const loginController = require('../controller/loginController');



// router to create new user 
router.post("/signup",
  loginController.createUsersTable,
  loginController.newUserSignUp,
  (req, res) => {
    return res.sendStatus(200);
});


// router to sign in as an existing user
router.post("/signin", 
  loginController.userLogin,
  (req, res) => {
    return res.sendStatus(200);
});

module.exports = router;
