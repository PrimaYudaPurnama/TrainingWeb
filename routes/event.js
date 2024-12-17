var express = require('express');
var router = express.Router();
var controller = require("../src/controller/event.controller");
/* GET home page. */
router.get('/', controller.show);
router.post('/', controller.insert);
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete_status)

module.exports = router;
