const homePage = (req, res) => {
  res.render('index', {title: 'Home'})
};

module.exports = {
	homePage,
  
};