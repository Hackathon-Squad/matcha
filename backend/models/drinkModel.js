const mongoose = require('mongoose');

const drinkTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Drinks = mongoose.model('drinks', drinkTemplate);
module.exports = Drinks;