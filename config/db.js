const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

// importing the whole db
export const importDb = async () => {
  const db = await sqlite.open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });

  return db;
};
