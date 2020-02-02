
const User = require('../models/user');

const renderSignupPage = (req, res) => {
  res.render('signup', {
    title: 'Sign up',
    user: req.user,
  });
};

const signup = (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    meaning: req.body.meaning,
    friendsText: req.body.friendsText,
    contactsText: req.body.contactsText,
    teacherName: req.body.teacherName,
    workScope: req.body.workScope,
    graduation_year: req.body.graduation_year,
    address: {
      location: {
        lat: req.body.lat,
        lon: req.body.lon,
        display_name: req.body.display_name,
      }
    }
  });
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
  });
};

module.exports = {
  renderSignupPage,
  signup,
};
