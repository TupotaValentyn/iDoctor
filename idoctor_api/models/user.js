const mongoose = require('mongoose');

//User Schema
const UserSchema = mongoose.Schema({
    fio: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

const User = module.exports = mongoose.model('User', UserSchema);