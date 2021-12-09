const { Schema } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        validate: [
            {
                validator(username) {
                    return username.length > 3
                },
                message: 'username should have at least 4 characters'
            },
            {
                validator(username) {
                    return !username.includes(' ')
                },
                message: 'username should not have white spaces'
            }
        ]
    },
    password: {
        type: String,
        required: true,
        validate: [
            {
                validator(password) {
                    return password.length > 7
                },
                message: 'password should have at least 8 characters'
            },
            {
                validator(password) {
                    return !password.includes(' ')
                },
                message: 'password should not have white spaces'
            }
        ]
    },
    email: {
        type: String,
        validate: validators.isEmail({'message': 'Please enter a valid email address.'})
    },
    favs: {
        type: Array
    }
})

module.exports = user