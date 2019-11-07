const router = require('express').Router();
const locationsRoutes = require('../locations/locationsRoutes');
const alumniRoutes = require('../alumni/alumniRoutes');

router.use('/locations', locationsRoutes);
router.use('/alumni', alumniRoutes);

module.exports = router;
