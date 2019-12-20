
const mapPage = (req, res) => {
  if (req.user) {
    res.render('map', {
      title: 'Map',
      user: req.user,
      full: true,
    });
  } else {
    res.render('map', {
      title: 'Map',
      full: false,      
    })
  };
};

const aboutPage = (req, res) => {
  res.render('about', {title: 'About'})
};
const signupPage = (req, res) => {
  res.render('signup', {title: 'Registration'})
};
const loginPage = (req, res) => {
  res.render('login', {title: 'Login'})
};
const userPage = (req, res) => {
  res.render('user', {title: 'User'})
};

module.exports = {
    mapPage,
    aboutPage,
    signupPage,
    loginPage,
	userPage
};