const connect = require('connect-ensure-login');
const router = require('express').Router();
const accountController = require('../controllers/accountController');

router.get('/', connect.ensureLoggedIn(), accountController.renderAccountPage);
router.get('/*', (req, res) => res.redirect('/account'));

router.post('/changeEmail',
  connect.ensureLoggedIn(), accountController.changeEmail);

router.post('/changeWorkScope',
  connect.ensureLoggedIn(), accountController.changeWorkScope);

router.post('/changeMeaning',
  connect.ensureLoggedIn(), accountController.changeMeaning);

router.post('/changeTeacherName',
  connect.ensureLoggedIn(), accountController.changeTeacherName);

router.post('/changePassword',
  connect.ensureLoggedIn(), accountController.changePassword);

router.post('/changeLocation',
  connect.ensureLoggedIn(), accountController.changeLocation);

router.post('/changeFriendsText',
  connect.ensureLoggedIn(), accountController.changeFriendsText);

router.post('/changeContactsText',
  connect.ensureLoggedIn(), accountController.changeContactsText);

router.post('/changeGraduationYear',
  connect.ensureLoggedIn(), accountController.changeGraduationYear);

module.exports = router;
