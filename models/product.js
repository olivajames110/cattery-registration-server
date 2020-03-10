const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	// firstName: {type: String, required: true},
	// lastName: {type: String, required: true},
	// dataUrl: {type: String, required: true},
	// dob_year: {type: String, required: true},
	// dob_month: {type: String, required: true},
	// dob_day: {type: String, required: true},
	// email: {type: String, required: true},
	// id: { type: Number, required: true },
	visitType: { type: String, required: true },
	minors: [
		{
			// id: { type: Number, required: true },
			firstName: { type: String, required: false },
			lastName: { type: String, required: false },
			dob_year: { type: String, required: false },
			dob_month: { type: String, required: false },
			dob_day: { type: String, required: false }
		}
	],
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dataUrl: { type: String, required: true },
	dob_year: { type: String, required: true },
	dob_month: { type: String, required: true },
	dob_day: { type: String, required: true },
	email: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
