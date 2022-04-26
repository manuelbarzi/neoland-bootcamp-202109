const { models: { User, Item }, mongoose } = require('logical-echo-data')
const { Types: { ObjectId } } = mongoose  
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')
const { sanitizeDocument } = require('./helpers/sanitizers')

function retrieveFavItems(id) {
    validateId(id)

    return (async () => {
        try {
            const favs = await User.find({ _id: ObjectId(id) }, 'favs')

            if (!favs.length) throw new NotFoundError('no fav items found for this user')
    
            const items = await Item.find({ item_id: { $in: favs } }, 'item_id name images price')
    
            items.forEach(sanitizeDocument)
    
            return items
        } catch (error) {
            throw error
        }
    })()
}

module.exports = retrieveFavItems