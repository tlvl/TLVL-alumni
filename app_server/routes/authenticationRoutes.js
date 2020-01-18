const passport = require('passport');
const router = require('express').Router();
const User = require('../models/user');
const nearestCities = require('find-nearest-cities');

router.use(passport.initialize());

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/signup', (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName || !req.body.role) {
    return res
      .status(400)
      .json({"message": "All fields required"});
  } else {
  const user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.greeting = req.body.greeting;
    user.teacherName = req.body.teacherName;
    user.workScope = req.body.workScope;
    user.role = req.body.role;
    user.address.location = {
    lat: req.body.lat,
    lon: req.body.lon,
    display_name: req.body.display_name,
  }
 
    user.setPassword(req.body.password);

    console.log(user.salt);
    user.save((err) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(200)
          .redirect('/map');
      }
    });
  }
});

module.exports = router;
