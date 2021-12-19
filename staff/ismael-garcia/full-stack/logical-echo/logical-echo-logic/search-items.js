const { models: { Item } } = require('logical-echo-data')
const { validateQuery } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')

function searchItems(query) {
    validateQuery(query)

    return (async () => {
        const items = await Item.find({ name: /{query}/i } , 'id name images price').exec();
        
        if (!items) throw new NotFoundError('No items found for your query')

        return items
    })()
}

module.exports = searchItems
