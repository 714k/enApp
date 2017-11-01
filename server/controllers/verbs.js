var request = require('request'),
		APIoptions = {
			server: 'http://localhost:3000'
		},

		showError = function (req, res, status) {
			var title, content;
			if (status === 404) {
				title = '404, page not found';
				content = "Oh Dear. Looks likewe can't find this page. Sorry."
			} else if (status === 500) {
				title = '500, internal server error';
				content = "How embarrassing. There's a problem with our server.";
			} else {
				title = status + ", something's gone wrong";
				content = "Something, somewhere, has gone just a little bit wrong."
			}

			res.status(status);
			res.render('generic-text', {
				title: title,
				content: content
			});	
		}, 

		renderHomepage = function(req, res, responseBody){
			var message;
			if (!(responseBody instanceof Array)) {
				message = "API lookup error";
				responseBody = [];
			} else {
				if (!responseBody.length) {
					message = "No Verbs found nearby";
				}
			}

			res.render('verbs', {
				title: 'Verbs',
				pageHeader: {
					title: 'VerbsApp',
					verbs: responseBody,
					message: message
				}
			});
		};

if (process.env.NODE_ENV === 'production') {
	APIoptions.server = 'https://server-production.xxx'
}

/* GET Home */
module.exports.home = function(req, res){
	var requestOptions, path;
	path = '/api/v1/verbs';
	
	requestOptions = {
		url: APIoptions.server + path,
		method: "GET",
		json: {}/*,
		qs: { offset: 20 } for pagination or items number */
	};

	request(
		requestOptions,
		function(err, response, body) {
			var i, data = body, dataLenght = data.length;
			if (response.statusCode === 200 && dataLength) {
				// Whatever you want to do here
			}

			renderHomepage(req, res, data);
		}
	);
};

