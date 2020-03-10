var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.url);
});


router.get('/:usersasdd', function(req, res, next) {
  res.send(req.params.usersasdd);
});
module.exports = router;
