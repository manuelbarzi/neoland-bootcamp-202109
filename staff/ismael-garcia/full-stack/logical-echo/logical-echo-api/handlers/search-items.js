const { searchItems } = require('logical-echo-logic')
const handleError = require('./helpers/handle-error')

module.exports = async (req, res) => {
    const { query: { q } } = req

    try {
        const items = await searchItems(q)

        res.json(items)
    } catch (error) {
        handleError(error, res)
    }
}