const { Schema } = require('mongoose')

const medication = new Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = medication