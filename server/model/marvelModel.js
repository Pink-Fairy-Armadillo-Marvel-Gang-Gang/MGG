const { Pool } = require("pg");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();
// const PG_URI =
//   "postgres://mqvcfbyb:syF3Vux2Q0seV2ofr7QsIlNzjn5e_7UA@suleiman.db.elephantsql.com:5432/mqvcfbyb";

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

pool.on("connect", () => console.log("connected to database..."));

// make sure the user and favorites tables are created
const createUsersTable = () => {
  const queryText = 
  `CREATE TABLE IF NOT EXISTS
    users(
      id UUID PRIMARY KEY,
      username VARCHAR(128) UNIQUE NOT NULL,
      password VARCHAR(128) NOT NULL,
    )`;
  
  pool.query(queryText) 
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createFavoritesTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    favorites(
      id UUID PRIMARY KEY,
      charName TEXT NOT NULL,
      id_marvel UUID NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )`;
    
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};



// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
  createFavoritesTable,
  createUsersTable,
};
