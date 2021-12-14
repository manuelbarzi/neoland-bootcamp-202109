const { Schema, Types: { ObjectId } } = require('mongoose')

const build = new Schema({
    champion: {
        type: ObjectId,
        ref: 'Champion',
        required: true
    },
    items: [{
        type: ObjectId,
        ref: 'Item'
    }],
    userId: {      
        type: ObjectId,
        ref: 'user',
        required: true
    }

})

module.exports = build