var router = require('express').Router();
var {Topic} = require("./../models/Topic")
var {Attribute, AttributeValue, AttributePair} = require("./../models/Attribute")
  
// split up route handling
router.use('/topics', require('./topics'));
router.use('/attributes', require('./attributes'));
router.use('/attributeValues', require('./attributes/attributeValues'));
router.use('/attributePairs', require('./attributes/attributePairs'));
router.use('/search', require('./search'));


router.use('/users', require('./users'));
router.delete("/",async (req, res, next) => {
    var deleted = await AttributeValue.remove({});
    deleted = await Attribute.remove({});
    deleted = await AttributePair.remove({});  
    deleted = await Topic.remove({});

    res.send(`Total wipeout of db`)
});

// etc.

module.exports = router;