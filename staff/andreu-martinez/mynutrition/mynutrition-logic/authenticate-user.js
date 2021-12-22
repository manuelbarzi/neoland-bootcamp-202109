const { validateUsername, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('mynutrition-errors')
const { models: { User } } = require('mynutrition-data')
const bcrypt = require('bcryptjs')

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)

    return (async () => {
        const user = await User.findOne({ username })

        if (!user || !bcrypt.compareSync(password, user.password)) throw new CredentialsError('wrong credentials')
        //if (!user || password !== user.password) throw new CredentialsError('wrong credentials')

        return user.id
    })()
}

module.exports = authenticateUser