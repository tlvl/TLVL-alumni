const passport = require('passport');
const router = require('express').Router();
router.use(passport.initialize());

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    //failureFlash: true,
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.post('/signup'), (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({"message": "All fields required"});
    }
  
    const user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.setPassword(req.body.password);
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
    })
  };

module.exports = router;
