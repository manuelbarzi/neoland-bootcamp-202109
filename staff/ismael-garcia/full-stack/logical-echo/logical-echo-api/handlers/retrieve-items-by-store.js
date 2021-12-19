const { retrieveItemsByStore } = require('logical-echo-logic')
const handleError = require('./helpers/handle-error')

module.exports = async (req, res) => {
    const { query: { q } } = req

    try {
        const items = await retrieveItemsByStore(q)

        res.json(items)
    
    } catch (error) {
        handleError(error, res)
    }
}