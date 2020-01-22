const flash = require('connect-flash');
const User = require('../models/user');
const nearestCities = require('find-nearest-cities');

const accountPage = (req, res) => {
  User.findById(req.user.id, (err, user) => {
    if (err) {
      user = req.user;
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

const changeGreeting = (req, res) => {
  User.findByIdAndUpdate(req.user.id, {
    $set: {
      greeting: req.body.greeting,
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
  User.findById(req.user.id, {
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    if (req.body.password === req.body.password_confirmation) {
      user.setPassword(req.body.password);
      req.logout();
    } else {
     	req.flash('error', 'Пароли не совпадают');
    }   
    res.redirect('/account');
  });
};

const changeLocation = (req, res) => {
  User.findById(req.user.id, {
  }, (err, user) => {
    if (err) {
      console.log(err.toJSON());
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    user.address.location = {
      lat: req.body.lat,
      lon: req.body.lon
    }
    const realCity = nearestCities(parseFloat(req.body.lat), parseFloat(req.body.lon));
    user.address.country = realCity[0].country; 
    user.addressForMap.country = realCity[0].country;
    user.addressForMap.name = realCity[0].name;
    console.log(realCity[0].name, user.addressForMap.name);

    user.addressForMap.location = {
      lat: realCity[0].lat,
      lon: realCity[0].lon,
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
  accountPage,
  changeEmail,
  changeWorkScope,
  changeGreeting,
  changeTeacherName,
  changePassword,
  changeLocation,
  changeGraduationYear
};