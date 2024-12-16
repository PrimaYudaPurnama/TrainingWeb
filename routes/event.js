var express = require('express');
var router = express.Router();
var controller = require("../src/controller/event.controller");
/* GET home page. */
router.get('/', controller.show);
router.post('/', controller.insert);
router.put('/:id', controller.update)

module.exports = router;
