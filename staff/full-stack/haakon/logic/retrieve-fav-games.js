const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('customs-errors')
const { models: { User } } = require('data')

function retrieveFavGames(userId) {
    validateId(userId)

    return (async () => {
        const user = await User.findById(userId).lean()

        if (!user) throw new NotFoundError(`user with id ${userId} not found`)

        favGames = user.favGames

        return favGames
    })()
}

module.exports = retrieveFavGames