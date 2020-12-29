const createFavoritesTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    favorites (
      id SERIAL PRIMARY KEY,
      charName TEXT NOT NULL,
      id_marvel UUID NOT NULL,
      FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE
    )`;
    
  pool.query(queryText)
    .then((res) => {
      console.log(`CREATE FAVORITES SUCCESS: ${res}`);
      // pool.end()
      //   .then(() => console.log("pool closed SUCCESS"))
      //   .catch(() => console.log("pool closed ERROR"));
    })
    .catch((err) => {
      console.log(`CREATE FAVORITES ERROR: ${err}`);
      // pool.end()
      //   .then(() => console.log("pool closed SUCCESS"))
      //   .catch(() => console.log("pool closed ERROR"));
    });
};