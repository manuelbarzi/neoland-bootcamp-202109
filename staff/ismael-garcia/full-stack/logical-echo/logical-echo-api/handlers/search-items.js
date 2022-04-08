const { searchItems, registerSearch } = require('logical-echo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { query: { q } } = req

    try {
        const search = {
            query: q,
            date: new Date()
        }

        await registerSearch(search)

        const items = await searchItems(q)

        res.json(items)
    } catch (error) {
        handleError(error, res)
    }
}