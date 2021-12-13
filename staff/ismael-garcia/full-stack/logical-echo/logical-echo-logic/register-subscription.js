const { validateString, validateEmail } = require('./helpers/validators')
const { models: { Subscription } } = require('logical-echo-data')

function registerSubscription(id, email) {
    validateString(id)
    validateEmail(email)

    return (async () => {
        try {
            await Subscription.create({ user_id: id, email })

        } catch (error) {
            throw error 
        }
    })()
}

module.exports = registerSubscription