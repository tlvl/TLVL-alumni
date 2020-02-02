const router = require('express').Router();

const authenticationRoutes = require('./authenticationRoutes');
const accountRoutes = require('./accountRoutes');
const signupController = require('../controllers/signupController');
const others = require('../controllers/others');

router.use('/', authenticationRoutes);
router.use('/account', accountRoutes);

router.get('/map', others.renderMapPage);
router.get('/about', others.renderAboutPage);
router.get('/signup', signupController.signupPage);
router.get('/login', others.renderLoginPage);
router.get('/', (req, res) => res.redirect('/map'));

module.exports = router;
