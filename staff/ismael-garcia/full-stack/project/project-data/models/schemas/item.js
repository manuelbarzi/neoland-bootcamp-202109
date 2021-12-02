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
    }
})

module.exports = item 