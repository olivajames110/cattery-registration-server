const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dataUrl: {type: String, required: true},
    dob_year: {type: String, required: true},
    dob_month: {type: String, required: true},
    dob_day: {type: String, required: true},
    email: {type: String, required: true},
})



module.exports = mongoose.model('Product',productSchema);