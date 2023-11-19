const express = require('express');
const router = express.Router();
const secret = ['ihfoktij', 'qReAQK9hxHIRatjtu2f9pknnVQt1UKWp']
const pg = require("pg");
const client = new pg.Client(`postgres://${secret[0]}:${secret[1]}@ella.db.elephantsql.com/ihfoktij`);

client.connect();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongo DB demo' });
});

router.get('/psql', async function(req, res, next) {
  let data = null;
  try {
    //data = await client.query("SELECT * FROM users");
    //console.log(data);
  } catch (error) {
    console.error(error);
  }
  res.render('psql', { data });
});

module.exports = router;
