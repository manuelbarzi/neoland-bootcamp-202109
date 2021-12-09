const { validateString, validateEmail } = require('./helpers/validators')
const { models: { Newsletter } } = require('logical-echo-data')

function registerNewsletter(id, email) {
    validateString(id)
    validateEmail(email)

    return (async () => {
        try {
            await Newsletter.create({ user_id: id, email })

        } catch (error) {
            throw error 
        }
    })()
}

module.exports = registerNewsletter