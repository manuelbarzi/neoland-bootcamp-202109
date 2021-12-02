const { Schema } = require('mongoose')

const emotional = new Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = emotional