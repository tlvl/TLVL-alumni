
const mockLocations = () => {
  return [
    {
      location_id: 1234,
      location_name: "Tallinn",
      country: "Estonia",
      country_code: "EE",
      lat: 59.436962,
      lng: 24.753574,
      alumni_count: 1205,
    },
    {
      location_id: 2345,
      location_name: "Paris",
      country: "France",
      country_code: "FR",
      lat: 48.864716,
      lng: 2.349014,
      alumni_count: 15,
    },
    {
      location_id: 3456,
      location_name: "New York City",
      country: "United States",
      country_code: "US",
      lat: 40.730610,
      lng: -73.935242,
      alumni_count: 17,
    },
    {
      location_id: 4567,
      location_name: "Moscow",
      country: "Russian Federation",
      country_code: "RU",
      lat: 55.755825,
      lng: 37.617298,
      alumni_count: 120,
    }
  ]
};

module.exports = {
    mockLocations,
};
