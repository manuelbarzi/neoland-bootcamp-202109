const { models: { Item } } = require('logical-echo-data')
const { validateQuery, validateId } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')
const { sanitizeDocument } = require('./helpers/sanitizers')

function searchItems(id, query) {
    validateId(id)
    validateQuery(query)

    return (async () => {
        const items = await Item.find({ $text: { $search: query }}).lean()
        
        if (!items.length) throw new NotFoundError('No items found for your query')

        items.forEach(sanitizeDocument)

        return items
    })()
}

module.exports = searchItems
