const { Schema,SchemaTypes } = require('mongoose')

const note = new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user_id: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },

    date_add: {
        type: Date,
        required: false,
        default: Date.now
    },

    date_upd: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = note