const { Schema } = require('mongoose')

const clickedItem = new Schema({
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
})

module.exports = clickedItem 