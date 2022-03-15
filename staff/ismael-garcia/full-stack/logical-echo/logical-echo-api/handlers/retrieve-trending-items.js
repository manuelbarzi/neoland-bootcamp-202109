const { retrieveTrendingItems } = require('logical-echo-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const items = await retrieveTrendingItems(id)

        res.json(items)
    } catch (error) {
        handleError(error, res)
    }
}