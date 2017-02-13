var express = require('express');
var router = express.Router();

var file_ctrl = require('../models/file_ctrl')

/* upload file */
router.post('/upload',file_ctrl.upload);


module.exports = router;
