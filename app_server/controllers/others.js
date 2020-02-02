
const renderMapPage = (req, res) => {
	res.render('map', {
    title: 'Map',
    user: req.user,
  });
};

const renderAboutPage = (req, res) => {
  res.render('about', {
    title: 'About',
    user: req.user,
  });
};

const renderLoginPage = (req, res) => {
  res.render('login', {
    title: 'Login',
    user: req.user,
    flash: req.flash('error'),
  });
};

module.exports = {
  renderAboutPage,
  renderLoginPage,
  renderMapPage,
};
