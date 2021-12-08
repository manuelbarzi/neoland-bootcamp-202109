const { Schema } = require('mongoose')

const clickedItem = new Schema({
    id: {
        type: String
    },
    item_id: {
        type: String,
    },
    keywords: {
        type: Array
    },
    date: {
        type: Date
    }
})

module.exports = clickedItem 