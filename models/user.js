const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	// id: { type: Number, required: true },
	visitType: { type: String, required: false },
	minors: { type: Array, required: false },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dataUrl: { type: String, required: false },
	dob_year: { type: String, required: false },
	dob_month: { type: String, required: false },
	dob_day: { type: String, required: false },
	email: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
