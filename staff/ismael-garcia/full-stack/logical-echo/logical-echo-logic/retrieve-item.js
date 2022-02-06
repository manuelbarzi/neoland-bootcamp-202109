const { models: { Item } } = require('logical-echo-data')
const { validateItemId, validateId } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')
const { sanitizeDocument } = require('./helpers/sanitizers')

function retrieveItem(id, item_id) {
    validateId(id)
    validateItemId(item_id)

    return (async () => {
        const item = await Item.findOne({ item_id }).lean()

        if (!item) throw new NotFoundError('no item found')

        sanitizeDocument(item)

        return item 
    })()
}

module.exports = retrieveItem