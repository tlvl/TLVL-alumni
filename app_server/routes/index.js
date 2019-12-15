const router = require('express').Router();
const locations = require('../controllers/locations');
const others = require('../controllers/others');

/* GET index page. */
router.get('/', locations.homePage);
router.get('/map', others.mapList);
router.get('/about', others.aboutPage);
router.get('/reg', others.regPage);
router.get('/login', others.loginPage);

module.exports = router;
