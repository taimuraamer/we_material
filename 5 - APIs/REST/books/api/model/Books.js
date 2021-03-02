const mongoose = require("mongoose")

// 1 - To create a schema for the database table

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        required: false,
        type: Date,
        default: Date.now
    }
})

// 2 - Create a model that can communicate with the DB.

module.exports = mongoose.model('Books', BookSchema);