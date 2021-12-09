const { validateString, validateDate } = require('./helpers/validators')
const { models: { Search } } = require('logical-echo-data')

function registerSearch(query, date) {
    validateString(query)
    validateDate(date)

    return (async () => {
        try {
            await Search.create({ query, date })

        } catch (error) {
            throw error 
        }
    })()
}

module.exports = registerSearch