const { Schema } = require('mongoose')

const item = new Schema({
    name: {
        type: String,
        required: true
    },
    level : {
        type: String,
        required: true
    } 
})

module.exports = item