const { registerSearch } = require('logical-echo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { body: { query } } = req 

    try {
        const date = new Date()

        await registerSearch(query, date)
        
        res.status(201).send()

    } catch (error) {
        handleError(error, res)
    }
}