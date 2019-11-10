const router = require('express').Router();
const mock = require('./alumniMock');

router.route('/')
  .get((req, res) => {
    res.json({
      alumni: mock.mockAlumni()
    })
  });

module.exports = router;
