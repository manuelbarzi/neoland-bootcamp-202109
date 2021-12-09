const { Schema } = require('mongoose')

const item = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array
    },
    price: {
        type: Array
    },
    url: {
        type: String,
        required:true,
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