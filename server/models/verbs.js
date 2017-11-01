var mongoose = require('mongoose');

var verbSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		default: ''
	},
	meaning: {
		type: String,
		required: true,
		default: ''
	},
	srcImg: {
		type: String,
		required: true,
		default: ''
	},
	verbalForms: {
		infinitive: {
			type: String,
			required: true,
			default: ''
		},
		simplePast: {
			type: String,
			required: true,
			default: ''
		},
		pastParticiple: {
			type: String,
			required: true,
			default: ''
		},
	},
	category: {
		type: String,
		required: true,
		default: 'A'
	},
	examples: {
		type: [String],
		required: true,
		default: []
	},

});

mongoose.model('verb', verbSchema);