const { models: { Game } } = require('data')
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('customs-errors')

function retrieveGame(gameId) {
    validateId(gameId)

    return Game.findById(gameId).populate('platforms', {
        name: 1
    }).populate('genres', {
        name: 1
    }).lean()
        .then(game => {
            if (!game) throw new NotFoundError(`game with id ${gameId} not found`)

            game.id = game._id.toString()
            delete game._id
            delete game.__v

            return game
        })
}

module.exports = retrieveGame