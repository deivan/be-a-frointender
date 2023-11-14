var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session?.user) {
    req.session.times++;
  } else {
    req.session.user = req.headers['user-agent'];
    req.session.times = 1;
  }
  res.render('index', { title: 'Express', info: 'some info about smt',
              user: req.session?.user, times: req.session?.times });
});

router.get('/hard', (req, res) => {
  let a = 0;
  for (let i = 0; i < 1e12; i++) {
    a+=i;
  }
  res.send('operaion ended')
})

module.exports = router;
