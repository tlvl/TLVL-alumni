const connect = require('connect-ensure-login');
const router = require('express').Router();
const accountController = require('../controllers/accountController');

router.get('/', connect.ensureLoggedIn(), accountController.accountPage);
router.route('/changeEmail')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeEmail);

module.exports = router;
