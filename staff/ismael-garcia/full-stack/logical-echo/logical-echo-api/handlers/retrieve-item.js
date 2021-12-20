const { retrieveItem } = require('logical-echo-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, query: { itemid } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const item = await retrieveItem(id, itemid)

        res.json(JSON.stringify(item))

    } catch (error) {
        handleError(error, res)
    }
}