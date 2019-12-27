const flash = require('connect-flash');
const User = require('../models/user');

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
  User.findById(req.user.id, (err, user) => {
    if (err) {
      req.flash('error', 'No user found. Try logging in again');
      res.redirect('/account');
    }
    user.email = req.body.email;
    user.save((err, user) => {
      if (err) {
        req.flash('error', 'Error updating a record. Try again later');
        res.redirect('/account');
      }
      res.redirect('/account');
    });
  });
};

module.exports = {
  accountPage,
  changeEmail,
};