const { Schema } = require('mongoose')

const search = new Schema({
    id: {
        type: String
    },
    user_id: {
        type: String,
    },
    query: {
        type: String
    },
    date: {
        type: Date
    }
})

module.exports = search 