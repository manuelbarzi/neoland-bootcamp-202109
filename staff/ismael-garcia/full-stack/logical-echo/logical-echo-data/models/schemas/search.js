const { Schema } = require('mongoose')

const search = new Schema({
    query: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = search 