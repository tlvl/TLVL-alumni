const router = require('express').Router();
const locationsRoutes = require('../locations/locationsRoutes');

router.use('/locations', locationsRoutes);

module.exports = router;
