const arg = process.argv.slice(2);
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

knex
  .select('*')
  .from('famous_people')
  .where('first_name', `${arg}`)
  .then((result) => {
    console.log('Searching...');
    console.log(`Found ${result.length} person(s) by the name '${arg}':`);
  
    for (let i = 0; i < result.length; i++) {
      console.log(`- ${i + 1}: ${result[i].first_name} ${result[i].last_name}, born '${result[i].birthdate.toLocaleDateString()}'`);
    }
  });

  knex.destroy();