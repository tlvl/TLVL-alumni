const router = require('express').Router();
const mock = require('./locationsMock');

router.route('/')
  .get((req, res) => {
    res.json({
      locations: mock.mockLocations()
    })
  });

module.exports = router;
