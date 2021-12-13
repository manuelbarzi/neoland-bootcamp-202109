const { Schema } = require( 'mongoose' )

const item = new Schema( {
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['boots', 'mythic', 'epic', 'legendary'],
    },
    key: {
        type: Number,
        required: true
    }
} )

module.exports = item