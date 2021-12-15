const { models: { Item } } = require('logical-echo-data')
const { validateStore } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')

function retrieveItemsByStore(store) {
    validateStore(store)

    return (async () => {
        const items = await Item.find({ store: store }).exec()

        if (!items.length) throw new NotFoundError(`items with store ${store} not found`)

        return items
    })()
}

module.exports = retrieveItemsByStore