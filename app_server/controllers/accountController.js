const flash = require('connect-flash');
const User = require('../models/user');

const renderAccountPage = (req, res) => {
  User.findById(req.user.id, (err, user) => {
    if (err) {
      req.logout();
      res.redirect('map');
    }
    res.render('account', {
      title: 'My account',
      user: user,
    });
  });
};

const changeEmail = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      email: req.body.email,
    }
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    res.redirect('/account');
  });
};

const changeWorkScope = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      workScope: req.body.workScope,
    }
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    res.redirect('/account');
  });
};

const changeGraduationYear = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      graduation_year: req.body.graduation_year,
    }
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    res.redirect('/account');
  });
};

const changeMeaning = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      meaning: req.body.meaning,
    }
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    res.redirect('/account');
  });
};

const changeContactsText = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      contactsText: req.body.contactsText,
    }
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    res.redirect('/account');
  });
};

const changeFriendsText = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      friendsText: req.body.friendsText,
    }
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    res.redirect('/account');
  });
};
const changeTeacherName = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      teacherName: req.body.teacherName,
    }
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    res.redirect('/account');
  });
};

const changePassword = (req, res) => {
  User.findById(req.user.id, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
    }

    if (req.body.password !== req.body.password_confirmation) {
      req.flash('error', 'Пароли не совпадают');
    } else {
      user.setPassword(req.body.password);
      user.save((err) => {
        if (err) {
          console.log(err.toJSON());
          req.flash('error', 'Error updating password');
        }
      });
    }

    res.redirect('/account');
  });
};

const changeLocation = (req, res) => {
  User.findById(req.user.id, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }

    user.address.location = {
      lat: req.body.lat,
      lon: req.body.lon,
      display_name: req.body.display_name,
    };

    user.save((err) => {
      if (err) {
        console.log(err.toJSON());
        req.flash('error', 'Error updating data. Try again later');
      }
      res.redirect('/account');
    });
  });
};

module.exports = {
  renderAccountPage,
  changeEmail,
  changeWorkScope,
  changeMeaning,
  changeFriendsText,
  changeContactsText,
  changeTeacherName,
  changePassword,
  changeLocation,
  changeGraduationYear
};