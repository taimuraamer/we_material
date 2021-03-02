const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: Number,
        required: true,
        min: 6,
        max: 155
    }
})

module.exports = mongoose.model('Users', UserSchema);

