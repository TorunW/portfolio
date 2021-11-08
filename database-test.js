const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  const db = await sqlite.open({
    filename: './mybd.sqlite',
    driver: sqlite3.Database,
  });

  await db.migrate({ force: 'last' });
  const project = await db.all('select * from project');
  console.log(JSON.stringify(project));
  const aboutinfo = await db.all('select * from aboutinfo');
  console.log(JSON.stringify(aboutinfo));
  const contact = await db.all('select * from contact');
  console.log(JSON.stringify(contact));
}

setup();
