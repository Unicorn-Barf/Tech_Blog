const router = require('express').Router();
const userRoutes = require('./userRoutes');

// /api appended

router.use('/user', userRoutes);

module.exports = router;