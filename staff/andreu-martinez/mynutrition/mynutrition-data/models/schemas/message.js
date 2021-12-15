const { Schema, Types : { ObjectId } } = require('mongoose')


const message = new Schema({
    parent: {
        type: ObjectId,
        ref: 'Message'
    },
    from: {
        type: ObjectId,
        required: true
    },
    to: {
        type: ObjectId,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = message