var router = require('express').Router();
console.log('chee')
var controller = require('./controller.js');
router.get('/', controller.get);
router.post('/', controller.post);



module.exports = router;