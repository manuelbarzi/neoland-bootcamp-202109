const { Schema, SchemaTypes } = require('mongoose')

const diary = new Schema({
    
    date: {
        type: Date,
        required: true
    },

    emotional: {
        type: String,
        required: false
    },

    timesleep: {
        type: Number,
        required: false
    },

    timetowakeup: {
        type: String,
        required: false
    },

    qualitysleep: {
        type: Number,
        required: false
    },

    hydrate: {
        type: Boolean,
        required: false
    },

    quantityhydrate: {
        type: Number,
        required: false
    },

    exercise: {
        type: Boolean,
        required: false
    },

    meditation: {
        type: Boolean,
        required: false
    },
    earlywakeup: {
        type: Boolean,
        required: false
    },
    makethebed: {
        type: Boolean,
        required: false
    },
    cleanface: {
        type: Boolean,
        required: false
    },
    cleanteeth: {
        type: Boolean,
        required: false
    },
    shower: {
        type: Boolean,
        required: false
    },
    order: {
       type: Boolean,
        required: false
    },
    cleanhouse: {
        type: Boolean,
        required: false
    },
    changesheets: {
        type: Boolean,
        required: false
    },
    cooking: {
        type: Boolean,
        required: false
    },
    gotostreet: {
        type: Boolean,
        required: false
    },
    timetostreet: {
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

module.exports = diary