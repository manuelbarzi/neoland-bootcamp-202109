const { validateItemId, validateEmail } = require('./helpers/validators')
const { models: { Subscription } } = require('logical-echo-data')
const { ConflictError } = require('logical-echo-errors')

function registerSubscription(id, email) {
    validateItemId(id)
    validateEmail(email)

    return (async () => {
        try {
            await Subscription.create({ user_id: id, email })

        } catch (error) {
            if (error.code === 11000)
                throw new ConflictError(`subscription with id ${id} already exists`)

            throw error 
        }
    })()
}

module.exports = registerSubscription