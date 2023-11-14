var express = require('express');
var router = express.Router();

const Users = [
  { firstName: 'Spounge', lastName: 'Bob', role: 'user' },
  { firstName: 'Freddie', lastName: 'Kruger', role: 'user' },
  { firstName: 'Darth', lastName: 'Vader', role: 'user' },
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { users: Users });
});

module.exports = router;
