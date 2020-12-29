const express = require('express');

const router = express.Router();

const db = require("../model/marvelModel");

const loginController = require('../controller/loginController');



// router to create new user 
router.post("/signup",
  loginController.createUsersTable,
  loginController.newUserSignUp,
  (req, res) => {
    return res.status(200).json(res.locals.userData);
});


// router to sign in as an existing user
router.post("/signin", 
  loginController.userLogin,
  (req, res) => {
    return res.status(200).json(res.locals.userData);
});

module.exports = router;
