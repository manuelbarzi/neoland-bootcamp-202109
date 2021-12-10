const { Schema, SchemaTypes } = require('mongoose')

const disorder = new Schema({

    date: {
        type: Date,
        required: true
    },

    symptom: {
        type: String,
        required: false
    },

    relax: {
        type: Number,
        required: false
    },

    negativestate: {
        type: Boolean,
        required: false
    },

    breathe: {
        type: Number,
        required: false
    },

    initiatives: {
        type: Number,
        required: false
    },

    whichinitiatives: {
        type: String,
        required: false
    },


    overreaction: {
        type: Number,
        required: false
    },

    tremblehands: {
        type: Number,
        required: false
    },

    paralyzed: {
        type: Number,
        required: false
    },

    nerves: {
        type: Number,
        required: false
    },

    worried: {
        type: Number,
        required: false
    },

    whichworried: {
        type: String,
        required: false
    },

    live: {
        type: Number,
        required: false
    },

    sad: {
        type: Number,
        required: false
    },
    verysleep: {
        type: Number,
        required: false
    },

    panic: {
        type: Number,
        required: false
    },

    enthuse: {
        type: Number,
        required: false
    },

    value: {
        type: Number,
        required: false
    },
    irritable: {
        type: Number,
        required: false
    },

    afraid: {
        type: Number,
        required: false
    },

    overthinking: {
        type: Number,
        required: false
    },


    causedstate: {
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
    required: false,
    default: Date.now
},

date_upd: {
    type: Date,
    required: false,
    default: Date.now
}
})

module.exports = disorder