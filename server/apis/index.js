var router = require('express').Router();

// split up route handling
router.use('/topics', require('./topics'));
router.use('/users', require('./users'));
// etc.

module.exports = router;