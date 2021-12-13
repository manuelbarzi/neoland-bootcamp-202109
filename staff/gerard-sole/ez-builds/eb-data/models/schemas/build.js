const { Schema } = require('mongoose')

const build = new Schema({
    champion: {
        type: ObjectId,
        ref: 'Champion',
        required: true
    },
    items: [{
        type: ObjectId,
        ref: 'Item'
    }]

})

module.exports = build