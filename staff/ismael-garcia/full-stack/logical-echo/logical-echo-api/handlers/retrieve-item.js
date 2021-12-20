const { retrieveItem } = require('logical-echo-logic')
const handleError = require('./helpers/handle-error')

module.exports = async (req, res) => {
    const { query: { id } } = req // ver cómo se coge el id

    try {
        const item = await retrieveItem(id)

        res.json(item)
    
    } catch (error) {
        handleError(error, res)
    }
}