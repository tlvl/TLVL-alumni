const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  console.log("Server not found");
}

const renderMap = function(req, res, responseBody) {
	res.render('map', {
    title: 'Map',
    user: req.user,
    locations: responseBody,
  });
};

const mapList = function(req, res){
  const path = '/api/locations';
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'GET',
    json : {},
    qs : {
      lng : -0.7992599,
      lat : 51.378091
    }
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = body;
      if (response.statusCode === 200 && data.length) {
        for (let i = 0; i < data.length; i++) {
          data[i].distance = _formatDistance(data[i].distance);
        }
      }
      renderMap(req, res, data);
    }
  );
};

const aboutPage = (req, res) => {
  res.render('about', {
    title: 'About',
    user: req.user,
  });
};
const signupPage = (req, res) => {
  res.render('signup', {
    title: 'Sign up',
    user: req.user,
  });
};
const loginPage = (req, res) => {
  res.render('login', {
    title: 'Login',
    user: req.user,
    flash: req.flash('error'),
  });
};

module.exports = {
  aboutPage,
  signupPage,
  loginPage,
  mapList,
};
