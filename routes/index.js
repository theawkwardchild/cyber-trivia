var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {
  res.send("test 123")
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trackslist' });
});

module.exports = router;
