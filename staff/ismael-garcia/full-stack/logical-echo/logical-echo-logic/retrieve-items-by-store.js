const { models: { Item } } = require('logical-echo-data')
const { validateStore } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')

function retrieveItemsByStore(store) {
    validateStore(store)

    return (async () => {
        const items = await Item.find({ store: store }, 'id name images price').exec()

        if (!items.length) throw new NotFoundError(`no items found from ${store} store`)

        return items
    })()
}

module.exports = retrieveItemsByStore