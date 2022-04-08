const { models: { User, Item } } = require('logical-echo-data')
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')
const { sanitizeDocument } = require('./helpers/sanitizers')

function retrieveFavItems(id) {
    validateId(id)

    return (async () => {
        const user = await User.findById(id).lean()

        if (!user) throw new NotFoundError(`user with id ${id} not found`)

        const { favs } = user

        if (!favs.length) throw new NotFoundError('no fav items found for this user')

        const items = await Item.find({ item_id: { $in: favs } }, 'item_id name images price').lean()

        items.forEach(sanitizeDocument)

        return items
    })()
}

module.exports = retrieveFavItems