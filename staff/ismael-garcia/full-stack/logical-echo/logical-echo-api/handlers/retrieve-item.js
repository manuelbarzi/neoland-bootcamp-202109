const { retrieveItem, registerClickedItem } = require('logical-echo-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, query: { q } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const clickedItem = {
            item_id: q,
            date: new Date()
        }

        await registerClickedItem(clickedItem)

        const item = await retrieveItem(id, q)

        res.json(item)
    } catch (error) {
        handleError(error, res)
    }
}