const router = require('express').Router();
const locations = require('../controllers/locations');
const others = require('../controllers/others');

/* GET index page. */
router.get('/', locations.homePage);
router.get('/map', others.mapPage);

module.exports = router;
