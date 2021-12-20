const { models: { Item } } = require('logical-echo-data')
const { validateStore, validateId } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')
const { sanitizeDocument } = require('./helpers/sanitizers')

function retrieveItemsByStore(id, store) {
    validateId(id)
    validateStore(store)

    return (async () => {
        const items = await Item.find({ store: store }, 'item_id name images price').lean()

        if (!items.length) throw new NotFoundError(`no items found from ${store} store`)

        items.forEach(sanitizeDocument)

        return items
    })()
}

module.exports = retrieveItemsByStore