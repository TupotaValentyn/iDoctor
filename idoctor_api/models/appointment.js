const mongoose = require('mongoose');

//Pharmacy Schema
const AppointmentSchema = mongoose.Schema({
    fio: {
        type: String,
        required: true
    },
    doctor_name: {
        type: String,
        required: true
    },
    day_ap: {
        type: String,
        required: true
    },
    time_ap: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

const Appointment = module.exports = mongoose.model('appointments', AppointmentSchema);