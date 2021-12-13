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
        type: String
    },
    url: {
        type: String,
        required:true,
        unique: true
    },
    description: {
        type: String
    },
    colors: {
        type: Array
    }
})

module.exports = item 