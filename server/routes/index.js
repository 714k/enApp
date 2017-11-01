var express = require('express');
var router = express.Router();
var mainCtrl = require('../controllers/main');

/* GET home page. */
router.get('/', mainCtrl.index);

/* GET management verbs API*/
router.get('/api/v1/verbs/management', mainCtrl.management);


module.exports = router;
