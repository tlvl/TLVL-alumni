const router = require('express').Router();
const userRoutes = require('./userRoutes');

const locations = require('../controllers/locations');
const others = require('../controllers/others');


router.use('/users', userRoutes);

/* GET index page. */
router.get('/', locations.homePage);
router.get('/map', others.mapPage);
router.get('/about', others.aboutPage);
router.get('/reg', others.regPage);
router.get('/login', others.loginPage);
router.get('/user', others.userPage);

module.exports = router;
