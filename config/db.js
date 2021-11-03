const sqlite = require('sqlite');

// importing the whole db
export const importDb = async () => {
  const db = await sqlite.open('./mydb.sqlite');
  return db;
};
