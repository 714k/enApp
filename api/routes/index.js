var express = require('express'),
		router = express.Router(),
		verbsCtrl = require('../controllers/verbs');

router.get('/verbs', verbsCtrl.getAllVerbs);		
router.post('/verbs', verbsCtrl.addVerb);		
router.get('/verbs/:verbID', verbsCtrl.getVerbByID);		
router.put('/verbs/:verbID', verbsCtrl.updateVerb);		
router.delete('/verbs/:verbID', verbsCtrl.deleteVerb);		

module.exports = router;