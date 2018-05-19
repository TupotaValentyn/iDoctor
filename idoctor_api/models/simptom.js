const mongoose = require('mongoose');

//Pharmacy Schema
const SimptomSchema = mongoose.Schema({
    name: {
        type: String
    },
    recomendation: {
        type: String
    },
    illness: {
        type: String
    },
    medicaments: {
        type: Array
    }
},{
    versionKey: false
});

const Simptom = module.exports = mongoose.model('Simptom', SimptomSchema);