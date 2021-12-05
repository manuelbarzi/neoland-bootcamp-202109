const { Schema,SchemaTypes } = require('mongoose')

const treatment = new Schema({
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
        required: true,
        default: Date.now
    },

    date_upd: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = treatment