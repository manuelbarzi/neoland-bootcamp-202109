const { Schema } = require('mongoose')

const { Types : { ObjectId } } = Schema


const message = new Schema({
    parent: {
        type: ObjectId,
        ref: 'Message'
    },
    from: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: ObjectId,
        ref: 'User',
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
    sentDate: {
        type: Date,
        required: true,
        default: Date.now
        
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = message