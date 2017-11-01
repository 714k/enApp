var mongoose = require('mongoose'),
		Verb = mongoose.model('Verb'),

		sendJSONresponse = function(res, status, content) {
			res.status(status);
			res.json(content);
		};

/* GET all verbs */		
module.exports.getAllVerbs = function(req, res) {
	Verb.find(function(err, data) {
		if (err) {sendJSONresponse(res, 500, {err})}
			console.log('There are all the verbs');
			sendJSONresponse(res, 200, {data});		
	});
};

/* GET verb by ID */		
module.exports.getVerbByID = function(req, res) {
	var id = req.params.id;

	Verb.findById(id, function(err, data) {
		if (err) {sendJSONresponse(res, 500, err)}
			console.log('Verb by ID', data);
			sendJSONresponse(res, 200, data);		
	});
};

/* Add new Verb */		
module.exports.addVerb = function(req, res) {
	var title = req.body.title,
			meaning = re.body.meaning,
			srcImg = re.body.srcImg,
			verbalForm = re.body.verbalForm,
			category = re.body.category,
			examples = re.body.examples;

	if (!title) {sendJSONresponse(res, 422, 'Title is required'); return;}
	if (!meaning) {sendJSONresponse(res, 422, 'Meaning is required'); return;}
	if (!srcImg) {sendJSONresponse(res, 422, 'path for image is required'); return;}
	if (!verbalForm) {sendJSONresponse(res, 422, 'All the Verbal Forms are required'); return;}
	if (!category) {sendJSONresponse(res, 422, 'Category is required'); return;}
	if (!examples) {sendJSONresponse(res, 422, 'At least one example is required'); return;}

	var Verb = new Verb({
		title,
		meaning,
		srcImg,
		verbalForm,
		category,
		examples
	});

	Verb.save(function(err, data) {
		if (err) {sendJSONresponse(res, 500, err)}
			console.log('Verb ', data, 'Added');
			sendJSONresponse(res, 200, data);
	});

};

/* Update Verb */
module.exports.updateVerb = function(req, res) {
	var id = res.params.id;

	Verb.findAndUpdate(id, req.body, function(err, data) {
		if (err) {sendJSONresponse(res, 500, err)}
			console.log('Verb ', data, 'Updated');
			sendJSONresponse(res, 200, data);
	});
};

/* Delete Verb */
module.exports.deleteVerb = function(req, res) {
	var id = res.params.id;

	Verb.findAndRemove(id, function(err, data) {
		if (err) {sendJSONresponse(res, 500, err)}
			console.log('Verb ', data, 'Deleted');
			sendJSONresponse(res, 200, data);
	});
};

