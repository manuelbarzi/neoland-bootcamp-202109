const { retrieveItem } = require('logical-echo-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, query: { q } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const item = await retrieveItem(id, q)

        res.json(item)

    } catch (error) {
        handleError(error, res)
    }
}