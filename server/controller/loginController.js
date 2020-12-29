const db = require("../model/marvelModel");

const loginController = {};

// middleware to create a SQL table (if one doesn't exist already) which will contain user data
loginController.createUsersTable = (req, res, next) => {
  console.log("INVOKED");
  const queryText = `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(128) UNIQUE NOT NULL,
      password VARCHAR(128) NOT NULL
    );`;

  db.query(queryText)
    .then((res) => {
      console.log(`CREATE USER SUCCESS: ${res}`);
      return next();
      // pool.end()
      //   .then(() => console.log("pool closed SUCCESS"))
      //   .catch(() => console.log("pool closed ERROR"));
    })
    .catch((err) => {
      console.log(`CREATE USER ERROR: ${err}`);
      return next(err);
      // pool.end()
      //   .then(() => console.log("pool closed SUCCESS"))
      //   .catch(() => console.log("pool closed ERROR"));
    });
};

// middleware to handle creating new user
loginController.newUserSignUp = (req, res, next) => {
  const { username, password } = req.body;
  console.log(process.env.PG_URI);
  console.log(username, password);
  // console.log('test at backend')
  db.query(
    "INSERT INTO users (username, password) VALUES ($1, $2)",
    [username, password],
    (err, result) => {
      if (
        err ==
        'error: duplicate key value violates unique constraint "users_username_key"'
      )
        res.send("Username already exists");
      else if (err) return next(err);
      else {
        console.log("SIGNUP SUCCESSFUL!");
        return next();
      }
    }
  );
};

// middleware to handle logging in existing user
loginController.userLogin = (req, res, next) => {
  const { username, password } = req.body;
  console.log("at login");
  db.query(
    "SELECT * FROM users WHERE username = $1 AND password = $2;",
    [username, password],
    (err, loginResult) => {
      if (err) console.log(`LOGIN ERROR: ${err}`);
      else if (loginResult.rows.length === 0) {
        db.query(
          "SELECT * FROM users WHERE username = $1;",
          [username],
          (err, userRes) => {
            if (err) return next(err);
            if (userRes.rows.length === 0) {
              res.send("USERNAME DOES NOT EXIST. PLEASE SIGN UP");
              return next();
            }
            res.send("INCORRECT PASSWORD");
            return next();
          }
        );
      }
      console.log("SUCCESS!");
      return next();
    }
  );
};

module.exports = loginController;