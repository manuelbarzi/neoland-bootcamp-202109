const { validateItem } = require('./helpers/validators')
const { models: { Item } } = require('logical-echo-data')

function registerItem(item) {
    validateItem(item)

    return (async () => {
        try {
            await Item.create(item)

        } catch (error) {
            throw error 
        }
    })()
}

module.exports = registerItem