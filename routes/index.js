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
    data = await client.query("SELECT * FROM users ORDER BY id");
    //console.log(data);
  } catch (error) {
    console.error(error);
  }
  res.render('psql', { data: data.rows });
});

router.get('/psql-insert', async function(req, res, next) {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let data;
  try {
    data = await client.query("INSERT INTO users (firstname, lastname, role) VALUES ($1, $2, 0)",
    [firstname, lastname]);
    //console.log(data);
  } catch (error) {
    console.error(error);
  }
  res.render('psql', { data: data });
});

router.get('/psql-update', async function(req, res, next) {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let id = req.query.id;
  let data;
  try {
    data = await client.query("UPDATE users SET firstname = $1, lastname = $2 WHERE id = $3",
    [firstname, lastname, id]);
    //console.log(data);
  } catch (error) {
    console.error(error);
  }
  res.render('psql', { data: data });
});

router.get('/psql-delete', async function(req, res, next) {
  let data = null;
  try {
    data = await client.query("SELECT * FROM users ORDER BY id");
    let lastId = data.rows.length;
    console.log(lastId);
    data = await client.query("DELETE FROM users WHERE id = $1", [lastId]);
  } catch (error) {
    console.error(error);
  }
  res.render('psql', { data: data.rows });
});

module.exports = router;
