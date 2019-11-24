const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.post(
  "/create",
  // usersController.validate,
  usersController.create,
  // usersController.redirectView
);

module.exports = router;
