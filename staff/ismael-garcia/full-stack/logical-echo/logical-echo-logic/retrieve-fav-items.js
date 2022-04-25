const { models: { Item } } = require('logical-echo-data')
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')
const { sanitizeDocument } = require('./helpers/sanitizers')

function retrieveFavItems(favs) {
    favs.forEach(id => validateId(id))

    return (async () => {
        try {
            if (!favs.length) throw new NotFoundError('no fav items found for this user')
    
            const items = await Item.find({ item_id: { $in: favs } }, 'item_id name images price').lean()
    
            items.forEach(sanitizeDocument)
    
            return items
        } catch (error) {
            throw error
        }
    })()
}

module.exports = retrieveFavItems