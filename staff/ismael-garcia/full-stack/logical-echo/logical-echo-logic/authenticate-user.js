const { validateEmail, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('logical-echo-errors')
const { models: { User } } = require('logical-echo-data')
const bcrypt = require('bcryptjs')

function authenticateUser (email, password) {
    validateEmail(email)
    validatePassword(password)

    return (async () => {
        const user = await User.findOne({ email })
        
        if (!user || !bcrypt.compareSync(password, user.password)) throw new CredentialsError('wrong credentials')
        
        return user.id
    })()
}

module.exports = authenticateUser