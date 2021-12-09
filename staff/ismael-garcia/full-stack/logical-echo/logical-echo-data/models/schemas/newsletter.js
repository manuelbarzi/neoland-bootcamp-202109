const { Schema } = require('mongoose')

const newsletter = new Schema({
    user_id: {
        type: String,
    },
    email: {
        type: String,
        validate: validators.isEmail({'message': 'Please enter a valid email address.'})
    }
})

module.exports = newsletter