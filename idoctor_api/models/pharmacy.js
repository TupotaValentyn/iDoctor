const mongoose = require('mongoose');

//Pharmacy Schema
const PharmacySchema = mongoose.Schema({
    name: {
        type: String
    },
    place: {
        type: String
    },
    opening_hours: {
        type: String
    },
    medicaments: {
        type: Array
    }
},{
    versionKey: false
});

const Pharmacy = module.exports = mongoose.model('pharmacys', PharmacySchema);