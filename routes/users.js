var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.io.emit("socketToMe", "users");
});

router.post('/', function(req,res,next) {
  res.send('i m a post request');
})

module.exports = router;
