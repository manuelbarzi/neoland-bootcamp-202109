const { validateString, validateDate } = require('./helpers/validators')
const { models: { ClickedItem } } = require('logical-echo-data')

function registerClickedItem(url, date) {
    validateString(url)
    validateDate(date)

    return (async () => {
        try {
            await ClickedItem.create({ url, date })

        } catch (error) {
            throw error 
        }
    })()
}

module.exports = registerClickedItem