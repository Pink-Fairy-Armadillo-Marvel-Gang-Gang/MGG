const { Pool } = require('pg');
const path = require('path')
const PG_URI = "postgres://mqvcfbyb:syF3Vux2Q0seV2ofr7QsIlNzjn5e_7UA@suleiman.db.elephantsql.com:5432/mqvcfbyb"

const pool = new Pool({
    connectionString: PG_URI
  });

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
