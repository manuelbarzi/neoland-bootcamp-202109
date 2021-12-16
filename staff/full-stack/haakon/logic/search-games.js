const { models: { Game } } = require('data')
const { validateQuery } = require('./helpers/validators')
const { NotFoundError } = require('customs-errors')

function searchGames(query) {
    validateQuery(query)

    // const regex = new RegExp(`\\b[${query}]\\w*\\b`, 'gi')
    // console.log(query.match(regex))
    // $regex: `\\b[${query}]\\w*\\b`, $options: 'gi'
    const regex = new RegExp(query, 'i')

    return (async () => {
        const _games = await Game.find({ name: regex }).lean()

        if (!_games) throw new NotFoundError(`game with that ${query} doesn't found`)

        _games.forEach(game => {
            game.id = game._id.toString()
            delete game._id
            delete game.__v
        })

        return _games
    })()
}

module.exports = searchGames