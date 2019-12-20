<<<<<<< .merge_file_a13576

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
=======
const locations = './api/locations';
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
        locations: responseBody
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
>>>>>>> .merge_file_a00856
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
<<<<<<< .merge_file_a13576
const userPage = (req, res) => {
  res.render('user', {title: 'User'})
};
=======
>>>>>>> .merge_file_a00856

module.exports = {
    mapList,
    aboutPage,
<<<<<<< .merge_file_a13576
    signupPage,
    loginPage,
	userPage
};
=======
    regPage,
    loginPage
};

>>>>>>> .merge_file_a00856
