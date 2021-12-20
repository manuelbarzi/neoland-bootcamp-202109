const { models: { Item } } = require('logical-echo-data')
const { validateItemId } = require('./helpers/validators')
const { NotFoundError } = require('logical-echo-errors')

function retrieveItem(id) {
    validateItemId(id)

    return (async () => {
        const item = await Item.findOne({ id: id }).exec()

        if (!item) throw new NotFoundError('no item found')

        return item
    })()
}

module.exports = retrieveItem