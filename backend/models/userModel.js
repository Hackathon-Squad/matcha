const mongoose = require('mongoose')

const userTemplate = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    interests: {
        type: Array,
        required: true
    }
})

const User = mongoose.model('users', userTemplate);
module.exports = User;