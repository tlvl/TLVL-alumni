const request = require('request');

const signupPage = (req, res) => {
  res.render('signup', {
    title: 'Sign up',
    user: req.user,
  });
};

const signupLocationPage = (req, res) => {
  res.render('signupLocation', {
    title: 'Sign up',
    user: req.user,
  });
};

module.exports = {
  signupPage,
  signupLocationPage,
};