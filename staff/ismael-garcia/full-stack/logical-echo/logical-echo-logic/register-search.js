const { validateString, validateDate } = require('./helpers/validators')
const { models: { Search } } = require('logical-echo-data')

function registerSearch(search) {
    const { query, date } = search
    
    validateString(query)
    validateDate(date)

    return (async () => {
        try {
            await Search.create(search)

        } catch (error) {
            throw error 
        }
    })()
}

module.exports = registerSearch