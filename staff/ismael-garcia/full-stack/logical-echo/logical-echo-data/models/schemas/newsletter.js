const { Schema } = require('mongoose')

const newsletter = new Schema({
    user_id: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator(email) { 
                return String(email)
                    .toLowerCase()
                    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            },
            message: 'Please enter a valid email address.'
        }
    }
})

module.exports = newsletter