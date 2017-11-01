/* GET home page. */
module.exports.index = function(req, res) {
	res.render('index', {title: 'Express API Server'})
};

/* GET management verbs API*/
module.exports.management = function(req, res) {
	res.render('management', {title: 'Verbs Management API'})
};
