const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  console.log("Server not found");
}

const fetchLocations = async () => {
  const path = '/api/locations';
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'GET',
    json : {},
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
      return data;
    }
  );
}

const mapPage = (req, res) => {
  const locations = fetchLocations();
  console.log(locations);
  res.render('map', {
    title: 'Map',
    locations: locations,
  });
};

module.exports = {
    mapPage,
}