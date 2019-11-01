const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ title: '30-летие!',
       locations: { city: 'Tallinn'},
       alumniList: { name: 'aaa'},
       alumniView: { username: 'NIKI'}
   });
});

router.get('/main', function(req, res, next) {
  res.render('main', 
  	{ title: '30-летие!',
       locations: { city: 'Tallinn'},
       alumniList: { name: 'aaa'},
       alumniView: { username: 'NIKI'}
   });
});

module.exports = router;
