var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.json({
    lat: 58.595,
    lon: 25.014,
    title: 'Tallinn',
    alumniCount: 1312
 
});
});
module.exports = router;
