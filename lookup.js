const arg = process.argv.slice(2);

const client = require('./connect_pg');

client.query("SELECT * FROM famous_people WHERE first_name = $1", arg, (err, result) => {
  if (err) {
    return console.error("error running query", err);
  }
  console.log('Searching...');
  console.log(`Found ${result.rows.length} person(s) by the name '${arg}':`);

  for (let i = 0; i < result.rows.length; i++) {
    console.log(`- ${i + 1}: ${result.rows[i].first_name} ${result.rows[i].last_name}, born '${result.rows[i].birthdate}'`);
  }

});