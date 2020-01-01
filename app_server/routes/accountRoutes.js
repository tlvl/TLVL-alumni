const connect = require('connect-ensure-login');
const router = require('express').Router();
const accountController = require('../controllers/accountController');

router.get('/', connect.ensureLoggedIn(), accountController.accountPage);
router.route('/changeEmail')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeEmail);

router.route('/changeWorkScope')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeWorkScope);

router.route('/changeGreeting')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeGreeting);

router.route('/changeTeacherName')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeTeacherName);

router.route('/changePassword')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changePassword);

router.route('/changeLocation')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeLocation);

module.exports = router;
