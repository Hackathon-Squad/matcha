import mongoose from 'mongoose'

const userTemplate = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    coffee_pref: {
        type: Array,
        required: true
    },
    shop_pref: {
        type: Array,
        required: true
    }
})

const User = mongoose.model('users', userTemplate);

export default User;