const connect = require('connect-ensure-login');
const router = require('express').Router();
const accountController = require('../controllers/accountController');

router.get('/', connect.ensureLoggedIn(), accountController.renderAccountPage);
router.route('/changeEmail')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeEmail);

router.route('/changeWorkScope')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeWorkScope);

router.route('/changeMeaning')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeMeaning);

router.route('/changeTeacherName')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeTeacherName);

router.route('/changePassword')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changePassword);

router.route('/changeLocation')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeLocation);
  
router.route('/changeFriendsText')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeFriendsText);

router.route('/changeContactsText')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeContactsText);

router.route('/changeGraduationYear')
  .get((req, res) => res.redirect('/account'))
  .post(connect.ensureLoggedIn(), accountController.changeGraduationYear);
module.exports = router;
