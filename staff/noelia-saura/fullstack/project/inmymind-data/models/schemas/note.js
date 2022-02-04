const { Schema,SchemaTypes } = require('mongoose')

const note = new Schema({
    content: {
        type: String,
        required: true
    },
    date: { // createdDate
        type: Date,
        required: true
    },
    user_id: { // user
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },

    date_add: { // addedDate (?)
        type: Date,
        required: false,
        default: Date.now
    },

    date_upd: { // updatedDate
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = note