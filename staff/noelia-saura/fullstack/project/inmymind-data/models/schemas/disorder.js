const { Schema, SchemaTypes } = require('mongoose')

const disorder = new Schema({
    
    date: {
        type: Date,
        required: true
    },

    q1: {
        type: String,
        required: false
    },

    q2: {
        type: String,
        required: false
    },

    q3: {
        type: String,
        required: false
    },

    q4: {
        type: String,
        required: false
    },

    user_id: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },

    date_add: {
        type: Date,
        required: true
    },

    date_upd: {
        type: Date,
        required: true
    }
})

module.exports = disorder