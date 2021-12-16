const { validateItem } = require('./helpers/validators')
const { models: { Item } } = require('logical-echo-data')
const { ConflictError } = require('logical-echo-errors')

function registerItem(item) {
    validateItem(item)

    return (async () => {
        try {
            await Item.create(item)

        } catch (error) {
            if (error.code === 11000)
                throw new ConflictError(`item with id ${item.id} already exists`)

            throw error
        }
    })()
}

module.exports = registerItem