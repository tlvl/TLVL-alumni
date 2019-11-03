const mapPage = (req, res) => {
  res.render('map', {title: 'Map'})
};

const aboutPage = (req, res) => {
  res.render('about', {title: 'About'})
};
const regPage = (req, res) => {
  res.render('reg', {title: 'Registration'})
};
const loginPage = (req, res) => {
  res.render('login', {title: 'Login'})
};
module.exports = {
    mapPage,
    aboutPage,
    regPage,
    loginPage
};