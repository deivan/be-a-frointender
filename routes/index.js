const express = require('express');
const router = express.Router();
const runMongo = require('../mongo');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongo DB demo' });
});

router.get('/mongo', function(req, res, next) {
  runMongo()
    .then(result => {
      res.render('mongo', { result: JSON.stringify(result) });
    })
    .catch(err => {
      res.render('mongo', { result: err });
    });
});

module.exports = router;
