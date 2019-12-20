const router = require('express').Router();
const connect = require('connect-ensure-login');

const authenticationRoutes = require('./authenticationRoutes');
const others = require('../controllers/others');

router.use('/', authenticationRoutes);

/* GET index page. */
router.get('/map', others.mapPage);
router.get('/about', others.aboutPage);
router.get('/signup', others.signupPage);
router.get('/login', others.loginPage);
router.get('/user', connect.ensureLoggedIn(), others.userPage);
router.get('/', (req, res) => res.redirect('/map'));

module.exports = router;
