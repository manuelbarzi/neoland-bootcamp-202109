const { Schema } = require('mongoose')

const clickedItem = new Schema({
    item_id: {
        type: String,
        required: true,
        unique: true
    },
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