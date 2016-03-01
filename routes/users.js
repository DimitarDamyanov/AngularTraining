var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = {
    name: 'Dimitar'
  }
  res.json(user);
});

module.exports = router;
