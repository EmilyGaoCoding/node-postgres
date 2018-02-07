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

knex('famous_people')
  .insert({ first_name: arg[0], last_name: arg[1], birthdate: arg[2] })
  .then();