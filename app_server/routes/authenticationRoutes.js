const passport = require('passport');
const router = require('express').Router();
const User = require('../models/user');
const nearestCities = require('find-nearest-cities');

router.use(passport.initialize());

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/signup', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({"message": "All fields required"});
  } else {
    const user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    // TODO: assign other options
    // user.location = {lat: , lon: }
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
