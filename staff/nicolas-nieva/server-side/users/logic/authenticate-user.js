const { CredentialsError } = require('../../errors')
const { models: { User } } = require ('data')
const { validateUsername, validatePassword} = require('./helpers/validators')

function authenticateUser(username, password){
    validateUsername (username)
    validatePassword (password)
    
    return User.findOne({ username, password })
        .then(user =>{
            if (!user) throw new CredentialsError ('wrong credentials')
            
            return user.id
        })
}

module.exports = authenticateUser