const { Schema,SchemaTypes } = require('mongoose')

const treatment = new Schema({
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
        required: true,
        default: Date.now
    },

    date_upd: { // updatedDate
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = treatment