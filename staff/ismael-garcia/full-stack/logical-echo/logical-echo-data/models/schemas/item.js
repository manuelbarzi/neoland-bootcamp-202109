const { Schema } = require('mongoose')

const item = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array
    },
    color: {
        type: String
    },
    price: {
        type: Array
    },
    url: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    color: {
        type: String
    },
    keywords: {
        type: Array
    }
})

module.exports = item 